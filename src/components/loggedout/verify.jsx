// import { useState } from 'react';
import React, { useState, useEffect } from 'react';
// import {  } from 'phosphor-react';
// import { useNavigate } from 'react-router-dom';
import { faPlus, faPlusSquare, faUser, faClock, faEdit, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { project } from "../../data/data";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import SignupScreen from './Signup';
import { useLocation } from 'react-router-dom';

const Verify = () => {
    // const { userdata } = route.params;
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [errorMsg, setErrormsg] = useState(null);
    const [userCode, setUserCode] = useState('XXXX');
    const [actualCode, setActualCode] = useState(null);

    const toggleModal = () => {

        setIsModalOpen(isModalOpen);
    };

    const location = useLocation();
  
  
    useEffect(() => {
        setActualCode(location.state.userdata[0]?.code);
    }, [location.state.userdata]);
    const handleSave = () => {
        // console.log(userCode);
        // console.log(actualCode);

        if (userCode == 'XXXX' || userCode == '') {
            setErrormsg('Please enter the code');
            return;
        }

        else if (userCode == actualCode) {
            console.log('correct code');
            const fdata = {
                email: location.state.userdata[0]?.email,
                password: location.state.userdata[0]?.password,
                name: location.state.userdata[0]?.name,
                dob: location.state.userdata[0]?.dob,
            }

            fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.message === 'User Registered Successfully') {
                        alert(data.message);
                        navigate('/home')
                    }
                    else {
                        alert("Something went wrong !! Try Signing Up Again");    

                    }
                })
        }
        else if (userCode != actualCode) {
            setErrormsg('Incorrect code');
            console.log("usercode"+userCode)
            console.log("actualcode"+actualCode)
            return;
        }


    }
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Project Details"
            ariaHideApp={false}
            style={customModalStyles}
        >
            <div style={styles.modalContent}>
                {errorMsg ? <p style={styles.errormessage}>{errorMsg}</p> : null}
                <h2 style={styles.modalTitle}>Verification</h2>
                <input
                    placeholder="Verification Code"
                    style={styles.input}
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)} 
                    onFocus={() => setErrormsg(null)}
                />
                <div className='row' style={styles.saveButton} >

                    <button onClick={handleSave} style={styles.saveButtonText}>
                        Verify
                    </button>
                </div>

            </div>
        </Modal>
    );
}

export default Verify;
const styles = {

    sub_txt: {
        fontSize: 20,
        color: 'mediumpurple',
        textAlign: 'left',
        marginHorizontal: 10,
        marginVertical: 10,

    },
    dropdownContainer: {

        width: 400,
        height: 750,
        backgroundColor: 'white',
        elevation: 5,
        padding: 30,
        flexDirection: 'column',
        marginHorizontal: 20,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        paddingHorizontal: 40,
        paddingVertical: 10,

    },
    closeButton: {
        width: "100%",
        height: 40,
        borderRadius: 30,
        backgroundColor: '#6A5ACD',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginHorizontal: 145,
    },
    Box: {

        borderColor: 'mediumpurple', // Set the border color here
        borderWidth: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        alignSelf: 'left',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        shadowColor: '#000',
        width: '240px',
        height: '40px',
        color: 'mediumpurple',
        fontSize: 20,
    },
    img: {
        width: 200,
        height: 100.

    },
    Container: {
        position: "relative",
        height: 400,
        fontWeight: "bold",
        justifyContent: 'center',


    },

    drawerHeaderContainer: {
        marginTop: 51.5,
        height: 100,
    },
    BottomNavBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    userName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonText: {
        fontSize: 18,
        marginHorizontal: 12,
        color: 'black',
        fontWeight: '500',
    },
    bt: {
        marginTop: 10,
        width: 250,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#deb887',
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginVertical: 8,
        borderRadius: 4,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        shadowOffset: {
            width: 2,
            height: 2,
        },
    },

    button: {
        width: 35,
        height: 35,
        borderRadius: 30,
        backgroundColor: '#6A5ACD',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,

    },

    modalContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999, // Adjust the z-index as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 10,
        width: '80%',
        maxWidth: '100%', // Adjust the width as needed
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', // Add box shadow for depth
        justifyContent: 'center'
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: '4%',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 8,
        marginBottom: 10,
        borderColor: 'mediumpurple',
        width: '100%',
    },

    search: {
        borderWidth: '1px',
        borderColor: 'mediumpurple',
        borderStyle: 'solid',
        borderRadius: 5,
        width: 180,
        height: 38,
        marginBottom: 10,
    },
    saveButton: {
        backgroundColor: 'mediumpurple',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',

        justifyContent: 'center',

    },
    saveButtonText: {
        backgroundColor: 'transparent',
        color: 'white',
        borderWidth: 0,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',

    },
    closeButton2: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    closeButtonText2: {
        color: 'white',
        fontSize: 16,
    },
    label: {
        justifyContent: 'center',
        fontSize: 16,
        marginBottom: 5,
        color: 'black',
        margin: 10,

    },
    inputContainer: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        justifyContent: 'center',
        padding: 10,
    },
    footer: {
        marginBottom: 50,
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
const customModalStyles = {
    overlay: {
        backgroundColor: 'transparent',
        zIndex: 9999,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
};

