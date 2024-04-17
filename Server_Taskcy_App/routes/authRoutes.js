const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const nodemailer = require("nodemailer");
async function mailer(recieveremail, code) {


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,

        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
            user: "haseebkhanhk601@gmail.com", // generated ethereal user
            pass: "xtoh wzkv avqk kniv", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Taskcy', // sender address
        to: `${recieveremail}`, // list of receivers
        subject: "Signup Verification", // Subject line
        text: `Your Verification Code is ${code}`, // plain text body
        html: `<b>Your Verification Code is ${code}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

router.post('/verify', (req, res) => {
    console.log('sent by client - ', req.body);
    const { name, email, password} = req.body;
    if (!name || !email || !password ) {
        return res.status(422).json({ error: "Please add all the fields" });
    }


    User.findOne({ email: email })
        .then(async (savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "Invalid Credentials" });
            }
            try {

                let code = Math.floor(100000 + Math.random() * 900000);
                let user = [
                    {
                        name,
                        email,
                        password,
                        code
                    }
                ]
                await mailer(email, code);
                res.send({ message: "Verification Code Sent to your Email", udata: user });
            }
            catch (err) {
                console.log(err);
            }
        })


})



const requireAuth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        
        req.user = decodedToken;
        next();
    });
};
router.post('/signup', async (req, res) => {
    console.log('client request:', req.body);
    const { name, email, password} = req.body;

    try {
        if (!email || !password || !name) {
            return res.status(422).send({ error: "Please fill all the fields" });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(422).send({ error: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            

        });

        await user.save();
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ message: "User Registered Successfully", token });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).send({ error: 'Internal server error' });

    }

});

router.post('/signin', async (req,res)=>{
const {email,password} = req.body;
if (!email || !password) {

return res.status(422).json({error: "Please add email or password"});
}
const savedUser = await User.findOne({email: email})

if(!savedUser){
return res.status(422).json({ error: "Invalid Credentials"});
}

 try{
 bcrypt.compare(password, savedUser.password, (err,result) => {
 if(result){
console.log("password matched");
const token = jwt.sign({ _id: savedUser._id}, process.env.JWT_SECRET);
res.send({ token});
 }
 else{
 console.log('Password does not match');
 return res.status(422).json({error: "Invalid Credentials"});
  }
 })
 }
 catch(err){
 console.log(err);
 }
})
router.post('/task', requireAuth, async (req, res) => {
    console.log('client request:', req.body);
    const { tname, tdetail, sdate, edate } = req.body;

    try {
        if (!tname || !tdetail || !sdate || !edate) {
            return res.status(422).send({ error: "Please fill all the fields" });
        }

        // Get the user ID from the request object (set by the requireAuth middleware)
        const userId = req.user._id;

        // Check if the task with the same name already exists for the user
        const existingTask = await User.findOne({ _id: userId, tname: tname });
        if (existingTask) {
            return res.status(422).send({ error: "Task already exists" });
        }

        // Create the task associated with the user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        user.tasks.push({
            tname,
            tdetail,
            sdate,
            edate
        });

        await user.save();

        res.status(201).send({ message: "Task uploaded successfully" });

    } catch (err) {
        console.error('Error during task upload:', err);
        res.status(500).send({ error: 'Internal server error' });
    }
});
module.exports = router;
