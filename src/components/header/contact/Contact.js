import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact main-body section-center-contact">
      <h3 className="main-title">
        Contact <span className="sub-title">us</span>
      </h3>
      <div className="contact_form">
        <form action="">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="input-box"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-box"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter your number"
              className="input-box"
            />
          </div>

          <div>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message here"
              className="textarea-box"
            />
          </div>
          <button className="secoundary-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
