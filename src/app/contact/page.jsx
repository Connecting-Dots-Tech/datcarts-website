'use client'

import { useState } from "react";
import "./Contact.css";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import PageTop from "../../components/PageTop";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = () => {
    const { name, number, email, subject, message } = formData;

    if (!name || !number || !email || !subject || !message) {
      alert("Please fill out all fields before sending the message.");
      return;
    }

    const phoneNumber = "+919544056839";
    const text = `Name: ${name}%0AContact Number: ${number}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <PageTop pageName={"Contact Us"} />
      <div className="contact-container">
        <div className="first-row">
          <div className="contact">
            <div className="get">Drop us a line!</div>
            <p className="contactPara">
              Get in touch with us effortlessly through our Contact page!
              Whether you have questions, feedback, or need assistance, we're
              here to help. Reach out to us via the form or email.
            </p>
          </div>

          <div className="card">
            <div className="bluecard">
              <GrLocation className="location" />
              <div className="our-location">Our Location</div>
              <div className="location-paraadd">
                3/494G, Mettungal, Manakkapady, Ernakulam 683520
              </div>
            </div>
            <div className="whitecard">
              <BsTelephone className="phone" />
              <div className="phonenumber">Phone Number</div>
              <div className="location-paraphone">
                +91 790 777 2742 <br />
                +91 9544 056 839
              </div>
            </div>
            <div className="bluecard">
              <MdOutlineEmail className="location" />
              <div className="our-location">Email Us</div>
              <div className="location-para">
                connectingdotstech@hotmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="second-row">
          <div className="message">
            <div className="iconWrapper">
              <MdOutlineEmail className="messageicon" />
            </div>
            <span>
              Reach out to us easily through the form! Share your inquiries,
              feedback, or requests, and we'll get back to you promptly.
            </span>
          </div>
          <form>
            <div className="form-container">
              <div className="input-wrapper">
                <input
                  className="input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="input-wrapper">
                <input
                  className="input"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  type="text"
                />
                <input
                  className="input"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Your Number"
                  type="tel"
                />
              </div>
              <textarea
                name="message"
                className="textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
              <button type="button" onClick={handleSendMessage}>
                Send your message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}