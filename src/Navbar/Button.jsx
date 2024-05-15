import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import axios from "axios";
import "./Button.css";

const Button = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const { name, email, phone, message } = formData;

      // Check if all required fields are filled
      if (!name || !email || !phone || !message) {
        throw new Error("Please fill out all required fields.");
      }

      const data = {
        records: [
          {
            fields: {
              Name: name,
              Email: email,
              Number: phone,
              Message: message,
            },
          },
        ],
      };

      console.log("Data:", data);

      const response = await axios.post(
        "https://api.airtable.com/v0/appTAwYpAI6aTXF5z/tblg5FilXGtuaBFRS",
        data,
        {
          headers: {
            Authorization:
              "Bearer patr2uJQeuhFsFr9W.3419125ce4a46ce02c0ab229d7c76080df088b5eb4ade695a12ea885cbef1052", // Replace with your API key
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response);

      if (response.status === 200) {
        alert("Form submitted successfully!"); // or some other feedback method
        setModal(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(
          "Failed to submit form. Server responded with status " +
            response.status
        );
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to submit form. Please try again."); // or some other feedback method
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="flex items-center gap-3 bg-black hover:bg-[yellow] hover:text-black  text-white font-bold  px-6 py-2 rounded-full"
      >
        Get Started <MdOutlineKeyboardDoubleArrowRight />
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="text-2xl font-bold text-center">
              Please Fill the Form
            </h2>
            <form className="colorful-form" onSubmit={submitForm}>
              <div className="form-group">
                <label className="form-label">Name:</label>
                <input
                  required
                  placeholder="Enter your name"
                  className="form-input"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email:</label>
                <input
                  required
                  placeholder="Enter your email"
                  className="form-input"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number:</label>
                <input
                  required
                  placeholder="Enter your number"
                  className="form-input"
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message:</label>
                <textarea
                  required
                  placeholder="Enter your message"
                  className="form-input"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="form-button" type="submit">
                Submit
              </button>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
