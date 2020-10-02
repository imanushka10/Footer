import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter, FiInstagram } from "react-icons/fi";

function FooterComponent() {
  return (
    <>
      <div className="box">
        <h1>About Fit N Club</h1>
        <p>lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </div>
      <div className="box">
        <h1>Support</h1>

        <ul>
          <li>
            <a href="#">Centers</a>
          </li>
          <li>
            <a href="#">FAQ's</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </div>
      <div className="box">
        <h1>Contacts</h1>
        <ul>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">+9924447684</a>
          </li>
          <li>
            <a href="#">+9924447684</a>
          </li>
        </ul>
      </div>
      <div className="box" style={{ textAlign: "center" }}>
        <h1>Follow us</h1>
        <a href="#">
          <FaFacebook
            style={{ padding: "10px", color: "#4267B2", fontSize: "40px" }}
          />
        </a>
        <a href="#">
          <FiTwitter
            style={{ padding: "10px", color: "#00ACEE", fontSize: "40px" }}
          />
        </a>
        <a href="#">
          <FiInstagram
            style={{ padding: "10px", color: "#fbad50 ", fontSize: "40px" }}
          />
        </a>
      </div>
    </>
  );
}
export default FooterComponent;
