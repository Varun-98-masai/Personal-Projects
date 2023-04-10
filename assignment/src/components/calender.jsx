import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "../styles/calender.css";
import {
    FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const ContributionCalendar = () => {
  return (
    <div className="container">
      <h2>Varun Jatav</h2>
      <div className="react-activity-calendar calender">
        <GitHubCalendar
          username="varun-98-masai"
          blockSize={20}
          //  fontSize={20}
        >
          <ReactTooltip />
        </GitHubCalendar>
      </div>
      <h2>Cipher Maps</h2>
      <div className="social">
        <div className="media">
          <h4>Linkedin</h4>
          <div className="linkedin-icon">
            <div>
              <a href="https://www.linkedin.com/in/varun-jatav-98ba16226/">
                <FaLinkedin />
              </a>
            </div>
            <div>
              <p>https://www.linkedin.com/</p>
            </div>
          </div>
        </div>

        <div className="media">
          <h4>Github</h4>
          <div className="linkedin-icon">
            <div>
              <a href="https://github.com/Varun-98-masai">
                <FaGithub />
              </a>
            </div>
            <div>
              <p>https://github.com/Varun-98-masai</p>
            </div>
          </div>
        </div>

        <div className="media">
          <h4>Website</h4>
          <div className="linkedin-icon">
            <div>
              <a href="https://varun-98-masai.github.io/">
                <FaHome />
              </a>
            </div>
            <div>
              <p>https://varun-98-masai.github.io/</p>
            </div>
          </div>
        </div>

        <div className="media">
          <h4>Facebook</h4>
          <div className="linkedin-icon">
            <div>
              <a href="https://www.facebook.com/profile.php?id=100003983423444">
                <FaFacebook />
              </a>
            </div>
            <div>
              <p>https://www.facebook.com/profile.php</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ContributionCalendar;
