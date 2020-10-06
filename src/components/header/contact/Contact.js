import React from "react";
import "./Contact.css";
const Contact = () => {
    return <div className="contact main-body">
      <div className="contacttitle">
      Contact <span className="sub-title">us</span>  
     </div>
     <div className="contact_form">
      <form action="">
        <div>
          <input
            type="username"
            placeholder="Username"
            className="input-box"
          />
        </div>
        <div>
          <input
            type="useremail"
            placeholder="Useremail"
            className="input-box"
          />
        </div>
        <div>
          <input
            type="userphone"
            placeholder="Userphone"
            className="input-box"
          />
        </div>
        
        <div>
          <textarea
            id="message"
            placeholder="Enter your message here"
            className="textarea-box"
          />
        </div>
        <button className="secoundary-btn">Submit</button>

        





      </form>
     </div>

     

      </div>;
  };
  
  export default Contact;