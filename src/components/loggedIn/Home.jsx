// import { useState } from 'react';
import React, { useState } from 'react';
// import {  } from 'phosphor-react';
// import { useNavigate } from 'react-router-dom';
import { faPlus, faPlusSquare, faUser, faClock, faEdit, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { project } from "../../data/data";

const Home = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [Category, setCategory] = useState('');
  const [Numbers, setNumber] = useState('');
  const [workersName, setWorkersName] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSave = () => {
    // Handle saving data
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }
  const handleChange2 = (event) => {
    setNumber(event.target.value);
  }
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleModal = () => {

    setIsModalOpen(!isModalOpen);
  };

  const toggleModal2 = () => {

    setIsModalOpen2(!isModalOpen2);
  };

  const toggleModal3 = () => {

    setIsModalOpen3(!isModalOpen3);
  };

  const toggleModal4 = () => {

    setIsModalOpen4(!isModalOpen4);
  };
  return (
    <div style={styles.Container}>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Task Details"
        ariaHideApp={false}
        style={customModalStyles} // Apply custom modal styles
      >
        <div style={styles.modalContent}>
          <h2 style={styles.modalTitle}>Task Details</h2>
          <input
            placeholder="Task Name"
            style={styles.input}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Task Description"
            style={styles.input}
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className='row'>
            <label style={styles.label}>Start Date
              <div> </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}

              >
              </DatePicker >
            </label>
          </div>

          <div className='row'>
            <label style={styles.label}>End Date
              <div> </div>
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} >
              </DatePicker >
            </label>
          </div>

          <div className='row' style={styles.saveButton} >

            <button onClick={handleSave} style={styles.saveButtonText}>
              Save
            </button>
          </div>
          <div className='row' style={styles.closeButton2}>
            <button onClick={toggleModal} style={styles.saveButtonText} >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isModalOpen2}
        onRequestClose={toggleModal2}
        contentLabel="Project Details"
        ariaHideApp={false}
        style={customModalStyles}
      >
        <div style={styles.modalContent}>
          <h2 style={styles.modalTitle}>Project Details</h2>
          <input
            placeholder="Project Name"
            style={styles.input}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Project Description"
            style={styles.input}
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div >

            <select id="dropdown" value={selectedOption} onChange={handleChange} style={styles.input}>
              <option value="Select">-- Project Category --</option>
              <option value="Hardware">1</option>
              <option value="Software">2</option>
              <option value="Networking">3</option>
            </select>
            <p style={{ color: 'mediumpurple' }}>Category Type: {selectedOption}</p>
          </div>

          <div >

            <select id="dropdown" value={Numbers} onChange={handleChange2} style={styles.input}>
              <option value="PLease Select">-- Number of Workers --</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="10">10</option>
            </select>
            <p style={{ color: 'mediumpurple' }}>{Numbers} Workers</p>
          </div>

          <div style={styles.search}>
            <input
              placeholder="Select Workers"
              style={styles.input1}
              value={workersName}
              onChange={(e) => setWorkersName(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} style={{ color: 'mediumpurple' }} />
          </div>

          <div className='row'>
            <label style={styles.label}>Start Date
              <div> </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}

              >
              </DatePicker >
            </label>
          </div>
          <div className='row'>
            <label style={styles.label}>End Date
              <div> </div>
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} >
              </DatePicker >
            </label>
          </div>
          <div className='row' style={styles.saveButton} >

            <button onClick={handleSave} style={styles.saveButtonText}>
              Save
            </button>
          </div>
          <div className='row' style={styles.closeButton2}>
            <button onClick={toggleModal2} style={styles.saveButtonText} >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isModalOpen3}
        onRequestClose={toggleModal3}
        contentLabel="Team Details"
        ariaHideApp={false}
        style={customModalStyles}
      >
        <div style={styles.modalContent}>
          <h2 style={styles.modalTitle}>Team Details</h2>
          <input
            placeholder="Team Name"
            style={styles.input}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Description"
            style={styles.input}
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div >

            <select id="dropdown" value={Numbers} onChange={handleChange2} style={styles.input}>
              <option value="PLease Select">-- Number of Workers --</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="10">10</option>
            </select>
            <p style={{ color: 'mediumpurple' }}>{Numbers} Members</p>
          </div>
          <div style={styles.search}>
            <input
              placeholder="Select Members"
              style={styles.input1}
              value={workersName}
              onChange={(e) => setWorkersName(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} style={{ color: 'mediumpurple' }} />
          </div>



          <div className='row' style={styles.saveButton} >

            <button onClick={handleSave} style={styles.saveButtonText}>
              Save
            </button>
          </div>
          <div className='row' style={styles.closeButton2}>
            <button onClick={toggleModal3} style={styles.saveButtonText} >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isModalOpen4}
        onRequestClose={toggleModal4}
        contentLabel="Event Details"
        ariaHideApp={false}
        style={customModalStyles}
      >
        <div style={styles.modalContent}>
          <h2 style={styles.modalTitle}>Event Details</h2>
          <input
            placeholder="Event Name"
            style={styles.input}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Event Description"
            style={styles.input}
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
  <div >

<select id="dropdown" value={selectedOption} onChange={handleChange} style={styles.input}>
  <option value="Select">-- Event Type --</option>
  <option value="Webinar">Webinar</option>
  <option value="Seminar">Seminar</option>
  <option value="Farewell">Farewell</option>
  <option value="Meeting">Meeting</option>
</select>
<p style={{ color: 'mediumpurple' }}>Event Type: {selectedOption}</p>
</div>
          <div className='row'>
            <label style={styles.label}>Start Date
              <div> </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="Pp"

              >
              </DatePicker >
            </label>
          </div>
          <div className='row'>
            <label style={styles.label}>End Date
              <div> </div>
              <DatePicker selected={endDate}
               onChange={(date) => setEndDate(date)}  
               showTimeSelect
               dateFormat="Pp" >
              </DatePicker >
            </label>
          </div>
          <div className='row' style={styles.saveButton} >

            <button onClick={handleSave} style={styles.saveButtonText}>
              Save
            </button>
          </div>
          <div className='row' style={styles.closeButton2}>
            <button onClick={toggleModal4} style={styles.saveButtonText} >
              Close
            </button>
          </div>
        </div>
      </Modal>

      <div style={{ marginLeft: 10 }}>
        <button onClick={handleToggleDropdown} style={styles.button} >
          <FontAwesomeIcon icon={faPlus} color='white' />
        </button>
        <FontAwesomeIcon icon={faAngleDown} color='mediumpurple' style={{ marginLeft: 10 }} ></FontAwesomeIcon>
        {isDropdownOpen && (
          <ul>
            <li>
              <button onClick={toggleModal} style={styles.Box}>
                <FontAwesomeIcon icon={faEdit} style={styles.sub_txt} /> Create Task
              </button>
            </li>
            <li><button onClick={toggleModal2} style={styles.Box}>
              <FontAwesomeIcon icon={faPlusSquare} style={styles.sub_txt} /> Create Project
            </button></li>
            <li><button onClick={toggleModal3} style={styles.Box}>
              <FontAwesomeIcon icon={faUser} style={styles.sub_txt} /> Create Team
            </button></li>
            <li><button onClick={toggleModal4} style={styles.Box}>
              <FontAwesomeIcon icon={faClock} style={styles.sub_txt} /> Create Event
            </button></li>
          </ul>
        )}

      </div>
      <section className="project" id="project">
        <h1 className="heading">
          our <span>project</span>
        </h1>

        <div className="box-container">
          {project.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" style={styles.img} />
              <h3>{item.text}</h3>
              <div className="price" style={{fontSize: 12}}>
               {item.description}
              </div>
              <div className="price" style={{fontSize: 12}}>
               StartDate: 6/01/2024
              </div>
              <div className="price" style={{fontSize: 12}}>
               EndDate: 6/02/2024
              </div>
              <h3>Workers: 4</h3>
              <h3>Names</h3>
              <div className="price" style={{fontSize: 12}}>
               1. John Doe
               2. John park
               3. Celena
               4. Andrew
              </div>
              <a href="#" className="btn">
                Delete
              </a>
              <div className='row'>
              <a href="#" className="btn">
               Edit 
              </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )

}
export default Home;
const styles = {

  sub_txt: {
    fontSize: 18,
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
    borderWidth: 3,
    backgroundColor: 'white',
    alignSelf: 'left',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    shadowColor: '#000',
    width: '140px',
    color: 'mediumpurple'
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
    marginTop: 100,

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
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    borderColor: 'mediumpurple',
    marginRight: 10,
  },
  input1: {
    borderWidth: 0,
    padding: 8,
    marginBottom: 10,
    outline: 'none',
    width: 160,
    marginRight: -10,

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
    width: '100%',
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
