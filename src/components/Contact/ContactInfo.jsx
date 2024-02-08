import React from "react";
import styled from "styled-components";
import nine from "../../assets/Contact/9.png";
import thirteentn from "../../assets/Contact/13.png";
import fourteenth from "../../assets/Contact/14.png";
import sixteenth from "../../assets/Contact/16.png";

import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const ContactInfo = () => {
    return (
        <Wrapper>
            <div class="left">
                <h4>let's connect</h4>
                <p class="contact_info">
                    Whether it's creating a new website or revamping an existing
                    one, I am here to help. Contact me anytime at 24/7, and
                    let's work together to bring your vision to life!"
                </p>
                <div class="address_sec">
                    {/* location row */}
                    <div class="location row">
                        <img src={nine} alt="location_icon" class="" />
                        <p class="">
                            <span class="">
                                Jatiya Kabi Kazi Nazrul Islam University
                            </span>
                            <br />
                            <span class="">Trishal,Mymensingh</span>
                            <br />
                            <span class="">Bangladesh</span>
                        </p>
                    </div>
                    {/* Mobile row */}
                    <div class="mobile row">
                        <img src={sixteenth} alt="mobile_icon" class="" />
                        <p class="">
                            <span class="">+880-01708642294</span>
                        </p>
                    </div>
                    {/* Whatsapp row */}
                    <div class="whatsapp row">
                        <img src={fourteenth} alt="Whatsapp" class="" />
                        <p class="">
                            <span class="">01708642294</span>
                        </p>
                    </div>
                    {/* Email row */}
                    <div class="email row">
                        <img src={thirteentn} alt="Whatsapp" class="" />
                        <p class="">
                            <span class="">00samsuzzaman@gmail.com</span>
                        </p>
                    </div>
                </div>
                {/* Social Links */}
                <ul class="contact_social">
                    <li>
                        <a href="">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <LuTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <CiLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .contact_info {
        font-family: var(--font-poppins);
        text-align: justify;
        font-weight: lighter;
        font-size: calc(0.75rem + 0.2vw);
        line-height: 25px;
        color: var(--black-clr);
        opacity: 0.9;
    }
    .address_sec {
        margin-top: 2.5rem;
    }
    .address_sec .row img {
        width: 19px;
        height: 19px;
    }
    .address_sec .row {
        display: flex;
        column-gap: 22px;
        margin-bottom: 1.5rem;
        font-weight: 300;
        font-size: calc(0.8rem + 0.15vw);
        color: var(--black-clr);
        opacity: 0.9;
    }

    .address_sec .row.location span {
        margin-top: 4px;
        display: inline-block;
    }
    .address_sec .row.location span:first-child {
        margin-top: 0;
    }
    /* Social Links */
    .contact_social {
        margin-top: 2rem;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    .contact_social li a {
        text-decoration: none;
        color: var(--secondary-clr);
        background-color: var(--neutral-clr);
        padding: 8px 10px;
        margin-right: 10px;
        border-radius: 4px;
        border: 1px solid var(--neutral-clr);
        font-size: 21px;
        transition: all 0.3s linear;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .contact_social li:hover a {
        background: var(--primary-clr);
        color: #fff;
    }
`;

export default ContactInfo;
