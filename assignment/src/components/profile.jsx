import React, { useState } from "react";
import "../styles/profile.css";
import myPhoto from "../Personal_Image.jpeg";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState(false);
  return (
    <div className="main_container">
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <h4>Profile Update</h4>
        </ModalHeader>
        <ModalBody>
          <div className="popup_form">
            <div>
              <img
                src={myPhoto}
                alt="popup_cipher_logo"
                className="popup_cipher_logo"
              />
            </div>
            <div>
              <form>
                <Row>
                  <Col lg={12}>
                    <div>
                      <label htmlFor="usename">First Name:</label>
                      <input type="text" placeholder="Enter Your First Name" />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div>
                      <label htmlFor="usename">Last Name:</label>
                      <input type="text" placeholder="Enter Your Last Name" />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div>
                      <label htmlFor="usename">Email Address:</label>
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div>
                      <label htmlFor="usename">Mobile Number:</label>
                      <input
                        type="number"
                        placeholder="Enter Your Mobile Number"
                      />
                    </div>
                  </Col>
                </Row>
              </form>
              <div style={{ display: "flex", gap: "4px" }}>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "8px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Cancle
                </button>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "orange",
                    padding: "8px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <Modal size="lg" isOpen={password} toggle={() => setPassword(!password)}>
        <ModalHeader toggle={() => setPassword(!password)}>
          <h4>Password Update</h4>
        </ModalHeader>
        <ModalBody>
          <div className="password_form">
            
            <div>
              <form>
                <Row>
                  <Col lg={12}>
                    <div>
                      <label htmlFor="current password">Current Password</label>
                      <input type="password" placeholder="Enter Your Current Password" />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div>
                      <label htmlFor="new password">New Password</label>
                      <input type="password" placeholder="Enter Your New Password" />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div>
                      <label htmlFor="confirm password">Confirm Password</label>
                      <input
                        type="text"
                        placeholder="Enter Your Confirm Password"
                      />
                    </div>
                  </Col>
                  
                </Row>
              </form>
              <div style={{ display: "flex", gap: "4px" }}>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "8px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Cancle
                </button>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "orange",
                    padding: "8px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <div className="profile_info">
        <div className="personal">
          <div onClick={() => setModal(true)} className="image_div">
            <img src={myPhoto} alt="" />
          </div>

          <div className="information">
            <h2>Hello,</h2>
            <h2 className="name">Varun Jatav</h2>
            <h2>mohit.mohit979@gmail.com</h2>
          </div>
        </div>
        <div className="followers">
         <Link to="/followers" > <h2>0 Followers</h2></Link> 
        </div>
      </div>

      <div className="about_me">
        <div className="about">
          <h2 style={{ fontSize: "21px" }}>ABOUT ME</h2>
          <button
            style={{
              color: "white",
              backgroundColor: "orange",
              padding: "8px",
              border: "none",
              borderRadius: "4px",
              width: "80px",
            }}
          >
            Edit
          </button>
        </div>

        <textarea
          style={{
            width: "100%",
            margin: "auto",
            display: "flex",
            marginTop: "10px",
            justifyContent: "center",
            padding: "10px",
            height: "150px",
          }}
          name="about"
          id="about"
          cols="30"
          rows="10"
        >
          Add Something About You.
        </textarea>
      </div>

      <div className="map">
        <h2>CIPHER MAPS</h2>
        <div className="react-activity-calendar calender">
          <GitHubCalendar
            username="varun-98-masai"
            blockSize={20}
            //  fontSize={20}
          >
            <ReactTooltip />
          </GitHubCalendar>
        </div>
      </div>

      <div className="map">
        <div className="about">
          <h2 style={{ fontSize: "21px" }}>ON THE WEB</h2>
          <button
            style={{
              color: "white",
              backgroundColor: "orange",
              padding: "8px",
              border: "none",
              borderRadius: "4px",
              width: "80px",
            }}
          >
            Edit
          </button>
        </div>
        <div className="form">
          <form action="">
            <label htmlFor="">Linkedin</label>
            <input type="text" />
            <label htmlFor="">Github</label>
            <input type="text" />
            <label htmlFor="">Facebook</label>
            <input type="text" />
          </form>
          <form action="">
            <label htmlFor="">Twitter</label>
            <input type="text" />
            <label htmlFor="">Instagram</label>
            <input type="text" />
            <label htmlFor="">Website</label>
            <input type="text" />
          </form>
        </div>
      </div>

      <div className="map">
        <div className="about">
          <h2 style={{ fontSize: "21px" }}>PROFESSIONAL INFORMATION</h2>
          <button
            style={{
              color: "white",
              backgroundColor: "orange",
              padding: "8px",
              border: "none",
              borderRadius: "4px",
              width: "80px",
            }}
          >
            Save
          </button>
        </div>
        <div className="form">
          <div>
            <label for="highest education">Highest education</label>

            <select name="education" id="education-select">
              <option value="">--Please choose an option--</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="higher secondary">Higher Secondary</option>
              <option value="graduation">Graduation</option>
              <option value="post graduation">Post Graduation</option>
            </select>
          </div>

          <div>
            <label for="pet-select">What do you do currently?</label>

            <select name="status" id="status-select">
              <option value="">--Please choose an option--</option>
              <option value="schooling">Schooling</option>
              <option value="teaching">Teaching</option>
              <option value="job">Job</option>
              <option value="freelancing">Freelancing</option>
            </select>
          </div>
        </div>
      </div>

      <div className="map">
        <div className="about">
          <h2 style={{ fontSize: "21px" }}>PASSWORD & SECUIRITY</h2>
          <button
            style={{
              color: "white",
              backgroundColor: "orange",
              padding: "8px",
              border: "none",
              borderRadius: "4px",
              width: "80px",
            }}
            onClick={() => setPassword(true)}
          >
            Change
          </button>
        </div>
        <div className="password_form">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="************" />
        </div>
      </div>
      <div className="map">
        <div className="about">
          <h2 style={{ fontSize: "21px" }}>INTERESTS</h2>
          <button
            style={{
              color: "white",
              backgroundColor: "orange",
              padding: "8px",
              border: "none",
              borderRadius: "4px",
              width: "80px",
            }}
          >
            Edit
          </button>
         
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
