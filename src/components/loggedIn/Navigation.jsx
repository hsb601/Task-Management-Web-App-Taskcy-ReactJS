// import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    //   const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div>

            <nav id="menu" className="navbar navbar-default navbar-fixed-top" >
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            {" "}
                            <span className="sr-only">Toggle navigation</span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                        </button>
                        <a href="#page-top" className="navbar-brand page-scroll">
                            <img src="img/splash2.png" style={styles.icon} alt="" ></img>
                        </a>
                        <a className="navbar-brand page-scroll" href="#page-top">
                            Taskcy

                        </a>{" "}
                    </div>

                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <button className="page-scroll" onClick={() => handleNavigate('/home')}>Home</button>

                            </li>
                            <li>
                                <button className="page-scroll" onClick={() => handleNavigate('/team')}>Team</button>
                            </li>
                            <li>
                                <button className="page-scroll" onClick={() => handleNavigate('/event')}>Event</button>
                            </li>
                            <li>
                                <button className="page-scroll" onClick={() => handleNavigate('/project')}>Project</button>
                            </li>
                            <li>
                                <button className="page-scroll" onClick={() => handleNavigate('/chats')}>Chats</button>
                            </li>

                            <li>
                                <button className="page-scroll" onClick={() => handleNavigate('/login')}>
                                    <FontAwesomeIcon icon={faSignOutAlt} ></FontAwesomeIcon> Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
const styles = {
    icon: {

      marginTop: -30,
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
    },
 
  };