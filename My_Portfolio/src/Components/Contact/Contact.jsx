import { useState, useEffect } from 'react';
import React from 'react'
import './Contact.css'

const Contact = () => {
    const [result, setResult] = useState("");

    useEffect(() => {
        if (result === "Form Submitted Successfully" || result === "Error: Please try again") {
            const timer = setTimeout(() => {
                setResult("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [result]);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "941bc661-a178-4067-817a-ca964b7f1b5b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            event.target.reset();
            setResult("Form Submitted Successfully");
        } else {
            setResult("Error: Please try again");
        }
    };

    return (
        <div className='container my-5 py-5' id="contact">
            <div className='contact-head text-center mb-4'>
                <h3 className='h3 fw-bold'>Contact</h3>
                <p className='pb-3 text-secondary'>Interested in connecting? Feel free to reach out</p>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='card text-center mx-3 mx-lg-0'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-12 col-lg-6 align-self-center'>
                                    <div className='cd'>
                                        <h2 className="heading text-uppercase my-2">Let's Connect</h2>
                                        <div className="subtext m-4">
                                            Fill in the form to start a conversation.
                                        </div>
                                    </div>
                                    <div className="contact-details text-dark fw-bold">
                                        {/* Location */}
                                        <div className="contact-item">
                                            <div className="contact-text">
                                                Hyderabad, India
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="contact-item email-item">
                                            <a
                                                href="mailto:vamshikrishnayeddula@gmail.com"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="contact-text link-dark link-underline link-underline-opacity-0"
                                            >
                                                vamshikrishnayeddula@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 my-4 align-self-center'>
                                    {/* Contact Form Section */}
                                    <div className="form-wrapper">
                                        <form className="contact-form" onSubmit={onSubmit}>
                                            {/* Name Input */}
                                            <div className="form-group mx-0 mx-lg-5">
                                                <input type="text" className="form-control-custom" placeholder="Name" aria-label="Name" required />
                                            </div>

                                            {/* Email Input */}
                                            <div className="form-group mx-0 mx-lg-5 m-2">
                                                <input type="email" className="form-control-custom"  placeholder="Email" aria-label='Email' required />
                                            </div>

                                            {/* Subject Input */}
                                            <div className="form-group mx-0 mx-lg-5 m-2">
                                                <input type="text" className="form-control-custom" placeholder="Subject" aria-label="Subject" required />
                                            </div>

                                            {/* Message Textarea */}
                                            <div className="form-group mx-0 mx-lg-5 m-2">
                                                <textarea className="form-control-custom" placeholder="Hi, Let's talk about..." rows="4" aria-label='Message' required></textarea>
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                className="btn btn-dark mb-1"
                                                type="submit"
                                            >
                                                Send Message
                                            </button>
                                            <p className='result position-absolute'>{result}</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
