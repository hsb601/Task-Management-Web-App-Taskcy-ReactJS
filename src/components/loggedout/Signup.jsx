import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignupScreen() {
  const navigate = useNavigate();
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    dob: 'null',
  });

  const [errormsg, setErrormsg] = useState(null);

  
  const handleSignUp = () => {
    // console.log(fdata);
    if (fdata.name == '' ||
        fdata.email == '' ||
        fdata.password == '' ||
        fdata.cpassword == '') {
        setErrormsg('All fields are required');
        return;
    }
    else {
        if (fdata.password != fdata.cpassword) {
            setErrormsg('Password and Confirm Password must be same');
            return;
        }
        else {
            fetch('http://localhost:3000/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
                .then(res => res.json()).then(
                    data => {
                        // console.log(data);
                        if (data.error === 'Invalid Credentials') {
                            // alert('Invalid Credentials')
                            setErrormsg('Invalid Credentials')
                        }
                        else if (data.message === "Verification Code Sent to your Email") {
                            // console.log(data.udata);
                            alert(data.message);
                            navigate('/verify', { state: { userdata: data.udata } });

                        }
                    }
                )
        }
    }

}

  return (
    <div style={styles.container}>
    <div style={styles.authBox}>
      <div>
      <img style={styles.logoBox} src={require('../assets/cover.png')} alt="Logo" />
      </div>
      <h1 style={styles.loginTitleText}>Create Account</h1>
      <p style={styles.pText}>Please enter your information & create your account</p>
      {errormsg ? <p style={styles.errormessage}>{errormsg}</p> : null}
      <hr style={styles.hr} />
      <div className="row">
        <div className="col-md-6">
          <div style={styles.inputBox}>
            <label style={styles.inputLabel}>Full Name</label>
            <input
              style={styles.input}
              type="text"
              onChange={(e) => setFdata({ ...fdata, name: e.target.value })}
              onFocus={() => setErrormsg(null)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div style={styles.inputBox}>
            <label style={styles.inputLabel}>Email</label>
            <input
              style={styles.input}
              type="email"
              onChange={(e) => setFdata({ ...fdata, email: e.target.value })}
              onFocus={() => setErrormsg(null)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div style={styles.inputBox}>
            <label style={styles.inputLabel}>Password</label>
            <input
              style={styles.input}
              type="password"
              onChange={(e) => setFdata({ ...fdata, password: e.target.value })}
              onFocus={() => setErrormsg(null)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div style={styles.inputBox}>
            <label style={styles.inputLabel}>Re-enter Password</label>
            <input
              style={styles.input}
              type="password"
              onChange={(e) => setFdata({ ...fdata, cpassword: e.target.value })}
              onFocus={() => setErrormsg(null)}
            />
          </div>
        </div>
      </div>
      <button style={styles.loginButton} onClick={handleSignUp}>
        Signup
      </button>
      <div style={styles.registerText}>
        <a href="/login" style={styles.registerText} >
          Go to Login!
        </a>
      </div>
      <p style={styles.forgotPasswordText}>Forgot Password?</p>
    </div>
  </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  authBox: {
    width: '40%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 14,
    marginTop: 10,
    marginBottom: 10,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  logoBox: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
    flex: 1,    
  },
    loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  pText: {
    fontSize: 12,
    color: 'black',
    cursor: 'pointer',
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#7C4700',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 6,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    color: 'black',
    fontSize: 16,
    borderWidth: 4,  
    borderColor: 'mediumpurple', 
    
  },
  loginButton: {
    backgroundColor: 'mediumpurple',
    marginTop: 10,
    padding: 10,
    borderRadius: 4,
    color: '#fff',
    cursor: 'pointer',
    width: '100%',
    fontSize: 18,
    borderWidth: 4,  
    borderColor: 'mediumpurple', 
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
    color: 'black',
    cursor: 'pointer',
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 12,
    color: 'black',
    cursor: 'pointer',
  },
  errormessage: {
    color: 'white',
    backgroundColor: 'red',
    borderRadius: 20,
    textAlign: 'center',
    paddingBottom: 6,
    padding: 5,
  },
};


