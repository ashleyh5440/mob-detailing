import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';

import "../Contact/styles.css";
// import { validateEmail } from '../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;

    const [userMessage, setUserMessage] = useState('');

    useEffect(() => {
        emailjs.init("xQBDGz01GePOVKots");
    }, []);

    const handleInputChange = (e) => {
        setFormState({
            ...formState, [e.target.name]: e.target.value
        });
    };

    const handleValidation = (e) => {
        if (e.target.name === "email"){
            if (!validateEmail (e.target.value)){
                setUserMessage("Invalid Email");
            }else {
                setUserMessage("");
            }
        }else {
            if (!e.target.value.length) {
                setUserMessage("Required");
            }else {
                setUserMessage("");
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_xbf1n1r', 'template_t9fklkg', {
            from_name: name,
            reply_to: email,
            message: message,
        }).then((response) => {
            setUserMessage("Email sent!");
            setFormState({name: '', email: '', message: ''});
        }).catch((error) => {
            setUserMessage("Error; please try again later.")
        });
    };

  return (
    <section id="contact-page">
        <h1>Book an appointment</h1>
        <div className="booking-container">
            calendy link, maybe image?
        </div>
        <h1>Contact</h1>
        <div className="contact-form">
            <Form>
                <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="First and last name" value={name} name="name" onChange={handleInputChange} onBlur={handleValidation}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} name="email" onChange={handleInputChange} onBlur={handleValidation}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="(XXX)XXX-XXXX" value={name} name="name" onChange={handleInputChange} onBlur={handleValidation}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} value={message} name="message" onChange={handleInputChange} onBlur={handleValidation}/>
                </Form.Group>
                {userMessage && <div>{userMessage}</div>}
                <Button variant="primary" type="submit" id="form-submit-btn" onClick={handleFormSubmit}>Submit</Button>
            </Form>
        </div>
    </section>
  );
};

export default Contact;

