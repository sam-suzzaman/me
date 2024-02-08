import React from "react";
import styled from "styled-components";

const ContactForm = () => {
    return (
        <Wrapper>
            <div className="right">
                <h4>add a note</h4>
                <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="contact_form_container"
                    autocomplete="off"
                >
                    <input
                        type="hidden"
                        name="apikey"
                        value="524311dd-fbf9-43ac-99e2-e414b80a4ab5"
                    />
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name.."
                        required
                    />

                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <label htmlFor="contact">Contact Number:</label>
                    <input
                        type="text"
                        id="contactNumber"
                        name="contact"
                        placeholder="Contact Number"
                        required
                    />
                    <label htmlFor="comment">Your Comment</label>
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder="Type Here..."
                        required
                    ></textarea>
                    <div className="h-captcha" data-captcha="true"></div>
                    <input type="submit" value="Submit" className="submit_btn" />
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .right label {
        color: var(--black-clr);
        opacity: 0.7;
        font-size: 12px;
        font-weight: 600;
        font-family: var(--font-poppins);
    }
    textarea {
        height: 100px;
        max-height: 150px;
    }
    input[type="text"],
    input[type="email"],
    textarea {
        width: 100%;
        padding: 7px 10px;
        border: 1px solid #8d8d8d;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 20px;
        resize: vertical;
        transition: all 0.3s linear;
        color: var(--color-white);
        background-color: #f5f5f5;
        font-size: 14px;
        font-weight: medium;
        font-family: var(--font-roboto);
    }
    input:focus,
    textarea:focus {
        outline: none;
        border: 1px solid var(--primary-clr);
        background-color: var(--white-clr);
        color: var(--black-clr);
    }
    .contact_form_container {
        border-radius: 5px;
        background-color: #f5f5f5;
        padding: 30px 23px;
    }

    .right .submit_btn {
        display: inline-block;
        outline: none;
        background-color: var(--secondary-clr);
        color: var(--white-clr);
        border: 1px solid var(--accent-clr);
        padding: 10px 50px;
        font-size: 15px;
        letter-spacing: 0.5px;
        font-weight: medium;
        border-radius: 6px;
        cursor: pointer;
    }
    .right .submit_btn:hover {
        background-color: var(--primary-clr);
        border-color: var(--primary-clr);
    }
`;

export default ContactForm;
