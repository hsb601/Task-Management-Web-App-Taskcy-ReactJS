const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
name: {
type: String,
},
email: {
type: String,
unique: true,
},
password: {
type: String,
},
dob: {
type: String,

},
tname:{
    type: String,
    unique: true,

},
tdetail:{
    type: String,

},
sdate: {
    type: String,
},
edate:{
    type: String,
},
})
userSchema.pre('save', async function (next) {
    const user = this;
    console.log("Just before saving before hashing  ", user.password);
    if (!user.isModified('password')) {
        return next();
    }
    user.password = await bcrypt.hash(user.password, 8);
    console.log("Just before saving & after hashing", user.password);
    next();
})


mongoose.model("User", userSchema)