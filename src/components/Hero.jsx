import React, { useEffect, useState } from "react";
import Button from "./shared/Button";
import { FaRegFilePdf } from "react-icons/fa";
import styled from "styled-components";
import { MdOutlineLocalPostOffice } from "react-icons/md";

import { motion } from "framer-motion";

import profile from "../assets/profile.png";

const fadeInVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
        opacity: 1,
        y: 0,
    },
};

const Hero = () => {
    const [user, setUser] = useState({});

    // Fetch user data
    useEffect(() => {
        fetch("Database/ProfileData.json")
            .then((res) => res.json())
            .then((res) => setUser(res))
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <Wrapper>
            <div className="hero_container">
                <motion.div
                    className="photo_container"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <img src={profile} alt="profile" width={220} height={220} />
                    <div className="dot"></div>
                </motion.div>
                <div className="content">
                    <motion.h2
                        className="title"
                        initial={{ opacity: 0, y: 50, scale: 1.1 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="fancy1">Hi, I'm</span>{" "}
                        <span className="fancy2">&#123;</span>
                        <span className="fancy">{user.username}</span>
                        <span className="fancy2">&#125;</span>
                    </motion.h2>
                    <motion.p
                        className="description"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {user?.short_desc}
                    </motion.p>
                </div>
                <motion.div
                    className="contact-btn-grp"
                    initial={{ opacity: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <Button
                        name="resume"
                        icon={<FaRegFilePdf />}
                        active={true}
                    />
                    <Button
                        name="Hire Me"
                        icon={<MdOutlineLocalPostOffice />}
                        scrollTo="contact"
                    />
                </motion.div>
                <div className="social-btn-grp"></div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .hero_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .photo_container {
        width: 100%;
        max-width: 220px;
        min-height: 220px;
        border-radius: 50%;
        position: relative;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
        padding-top: calc(0.8rem + 0.5vw);
        padding-bottom: 0;
    }
    .photo_container .dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #00a2ff;
        position: absolute;
        bottom: 23px;
        right: 32px;
        transform: scale(1);
        animation: glow 4s ease 0s infinite normal forwards running;
    }
    @keyframes glow {
        0% {
            background-color: #00a2ff;
            transform: scale(1);
        }
        50% {
            background-color: #0073b5;
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
            background-color: #00a2ff;
        }
    }

    .photo_container img {
        border-radius: 500%;
        width: 100%;
        object-fit: cover;
    }
    .content .title {
        font-family: var(--font-poppin);
        text-align: center;
        font-weight: 700;
        font-size: calc(1.3rem + 2vw);
        letter-spacing: 1px;
        text-transform: capitalize;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .content .fancy {
        text-transform: uppercase;
        color: var(--primary-clr);
    }
    .content .fancy1 {
        color: transparent;
        -webkit-text-stroke: 2px var(--gray-clr);
    }
    .content .fancy2 {
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1.5px var(--primary-clr);
    }
    .content .description {
        font-weight: medium;
        font-size: calc(0.8rem + 0.1vw);
        font-family: poppins;
        /* text-transform: capitalize; */
        line-height: 25px;
        letter-spacing: 1px;
        width: 100%;
        max-width: 750px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 30px;
        color: var(--gray-clr);
    }
    .contact-btn-grp {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: calc(1rem + 0.5vw);
    }
`;

export default Hero;
