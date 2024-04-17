import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LoginScreen = () => {
  const [fdata, setFdata] = useState({
    email: '',
    password: ''
  });

  const [errormsg, setErrormsg] = useState(null);
  const navigate = useNavigate();

  const Sendtobackend = () => {
    if (fdata.email === '' || fdata.password === '') {
      setErrormsg('All fields are required');
      return;
    } else {
      fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            setErrormsg(data.error);
          } else {
            alert('Logged in successfully');
            navigate('/Home'); 
          }
        })
        .catch(error => {
          alert(fdata.email + '\nPlease try later' + '\n' + error);
        console.log(error)
        });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.centerizedView}>
        <div style={styles.authBox}>
          <img style={styles.logoBox} src={require('../assets/cover.png')} alt="Logo" />
          <h1 style={styles.loginTitleText}>Welcome Back</h1>
          <p style={styles.pText}>Please enter your email address and password for login</p>
          {errormsg ? <p style={styles.errormessage}>{errormsg}</p> : null}
          <hr style={styles.hr} />
          <div style={styles.inputBox}>
            <label style={styles.inputLabel}>Email</label>
            <input
              style={styles.input}
              type="text"
              autoCapitalize="none"
              onChange={(e) => setFdata({ ...fdata, email: e.target.value })}
            />
          </div>
          <div style={styles.inputBox}>
            <label style={styles.inputLabel}>Password</label>
            <input
              style={styles.input}
              type="password"
              autoCapitalize="none"
              onChange={(e) => setFdata({ ...fdata, password: e.target.value })}
            />
          </div>
          <div style={styles.registerText}>
          <button style={styles.loginButton} onClick={Sendtobackend}>
            Login
          </button>
          </div>
          <div style={styles.registerText}>
        <a href="/signup" style={styles.registerText} >
        Don't have an account? Register Now
        </a>
        </div>
        <div style={styles.forgotPasswordText}>
        <a href="/signup" style={styles.forgotPasswordText} >
        Forgot Password?
        </a>
        </div>
        </div>
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
    width: 400,
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 14,
    marginTop: 10,
    marginBottom: 100,
    paddingBottom: 30,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  logoBox: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: -80,
  },
  loginTitleText: {
    marginTop: '30%',
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
    fontSize: 16,
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 10,
    color: 'black',
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

export default LoginScreen;
