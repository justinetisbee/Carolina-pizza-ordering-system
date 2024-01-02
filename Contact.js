import React, { useState } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/insertContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data inserted successfully
        console.log("Message sent successfully");
        // You can reset the form or show a success message here
      } else {
        // Handle the error
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="full_name">Full Name</label>
          <input name="full_name" value={formData.name} onChange={handleChange} placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea rows="6" value={formData.message} onChange={handleChange} placeholder="Enter message..." name="message" required></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
