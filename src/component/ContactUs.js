import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export const ContactUs = () => {

  const onChange = () => { };
  const form = useRef();
  const captchaRef = useRef(null);


  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [contactError, setContactError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate name field
    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validate contact field
    if (contact.trim() === '') {
      setContactError('Contact number is required');
      isValid = false;
    } else if (!/^\d+$/.test(contact.trim())) {
      setContactError('Contact number should contain only numbers');
      isValid = false;
    } else {
      setContactError('');
    }

    // Validate email field
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate message field
    if (message.trim() === '') {
      setMessageError('Message is required');
      isValid = false;
    } else {
      setMessageError('');
    }

    emailjs
      .sendForm(
        "service_t8vx6jm",
        "template_ppbb69q",
        form.current,
        "DGnS_ZoZ4IsTYFAjX"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("message sent");

        },
        (error) => {
          console.log(error.text);
          alert("oops please try again");

        }
      );
    // if (isValid) {

    //   console.log('Form submitted!');

    // }


  };

  return (
    <>
      <div class="container">
        <div class="contact-form-area">
          <div class="contact-form-heading">
            <h3>Leave a message, We care about you</h3>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div class="d-flex flex mb-5 px-0">
              <div class="col-md-12 d-flex flex-wrap px-0">
                <div className="col-md-6 pl-0">
                  
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                 {nameError && <div className="error">{nameError}</div>}
                </div>
                <div className="col-md-6 px-0">
                  
                  <input
                    type="tel"
                    id="contact"
                    name="user_phone"
                    placeholder="Contact no"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                  {contactError && <div className="error">{contactError}</div>}
                </div>
              </div>
            </div>
            <div class="col-md-12 d-flex flex-wrap px-0">
                          <input
                type="email"
                id="email"
                value={email}
                name="user_email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>

            <div className="text-center" required>
              <textarea
                id="message"
                name="msg"
                value={message}
                placeholder="Enter text here..."
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              {messageError && <div className="error">{messageError}</div>}
              <div className="recap">
                <ReCAPTCHA sitekey="6LcU2tMlAAAAAOv5z2YdxcfsbEnLg7NIU3iB68wD" onChange={onChange} />
              </div>

              <input
                className="btn btn-primary mt-5"
                type="submit"
                value="Send"
              />

            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactUs;


// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import styled from "styled-components";

// // npm i @emailjs/browser

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_t8vx6jm",
//         "template_ppbb69q",
//         form.current,
//         "DGnS_ZoZ4IsTYFAjX"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <StyledContactForm>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </StyledContactForm>
//   );
// };

// export default Contact;

// // Styles
// const StyledContactForm = styled.div`
//   width: 400px;

//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;

//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     label {
//       margin-top: 1rem;
//     }

//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;
