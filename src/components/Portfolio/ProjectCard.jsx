import React from "react";
import styled from "styled-components";

import { Reoverlay } from "reoverlay";
import ModalLayerOneUI from "./ModalLayerOneUI";

import { motion } from "framer-motion";

const fadeInVariants = {
    initial: (index) => {
        if (index % 2 == 0) {
            return {
                opacity: 0,
                translateX: -300,
                translateY: 100,
            };
        } else {
            return {
                opacity: 0,
                translateX: 300,
                translateY: 100,
            };
        }
    },
    animate: (index) => {
        return {
            opacity: 1,
            translateX: 0,
            translateY: 0,
            transition: {
                duration: 0.4,
                delay: 0.3 * index,
            },
        };
    },
};

const ProjectCard = ({ project, index }) => {
    const OpenModalLayerOne = () => {
        Reoverlay.showModal("ModalLayerOne", {
            ui: <ModalLayerOneUI project={project} />,
        });
    };
    return (
        <Wrapper>
            <motion.div
                className="portfolio_card"
                variants={fadeInVariants}
                initial="initial"
                animate="animate"
                custom={index}
            >
                {/* <motion.div
                className="portfolio_card"
                initial={fadeInVariants.initial}
                whileInView={fadeInVariants.animate}
                transition={{ duration: 0.5, delay: 0.02 * index }}
            > */}
                <div className="card_content">
                    <img
                        src={project.thumbnail}
                        className="one"
                        alt="BgImage"
                    />

                    <div className="caption">
                        <h2>{project.title}</h2>
                        <p>
                            {project.description.length > 90
                                ? project.description.slice(0, 90) + "..."
                                : project.description}
                        </p>
                        <div
                            className="project_links"
                            onClick={OpenModalLayerOne}
                        >
                            see detail
                        </div>
                    </div>
                </div>
            </motion.div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 496px; //550
    height: auto;
    max-height: 299px; //300
    transition: all 0.5s linear;

    .portfolio_card {
        height: 100%;
        width: 100%;
        display: block;
    }

    .portfolio_card .card_content {
        width: 100%;
        /* height: 100%; */
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        transition: all 0.3s;
        border-left: 3px solid var(--light-border);
        border-top: 3px solid var(--light-border);
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
        /* padding: 8px; */
    }
    .portfolio_card .card_content img {
        width: 100%;
        object-fit: cover;
    }
    /* tricks */
    .portfolio_card .card_content::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.6s;
        transition-delay: 0.1s;
        transform: scale(0);
        opacity: 0;
    }
    .portfolio_card .card_content:hover:before {
        transform: scale(1);
        opacity: 1;
        transition-delay: 0s;
    }
    .portfolio_card .card_content .caption {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--white-clr);
        /* trick */
        opacity: 0;
        transform: translateY(100%);
        transition: all 0.4s;
        padding: 14px 10px;
        background-color: #fff;
    }
    .portfolio_card .card_content:hover .caption {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.15s;
    }

    .portfolio_card .card_content .caption h2 {
        text-transform: capitalize;
        font-weight: medium;
        margin: 0;
        font-size: calc(1rem + 0.15vw);
        color: var(--secondary-clr);
        text-align: center;
        line-height: 28px;
    }
    .portfolio_card .card_content .caption p {
        font-size: calc(0.7rem + 0.1vw);
        font-weight: medium;
        margin-top: calc(2px + 0.2vw);
        text-align: justify;
        padding: 0 calc(8px + 0.5vw);
        color: #000;
        line-height: calc(20px + 0.5vw);
        font-weight: lighter;
    }
    .portfolio_card .card_content .project_links {
        text-transform: capitalize;
        font-weight: medium;
        font-size: 13px;
        letter-spacing: 1px;
        background-color: var(--secondary-clr);
        border-radius: 4px;
        padding: 6.5px 16px;
        color: #fff;
        transition: all 0.3s linear;
        margin-top: 6px;
        cursor: pointer;
    }
    .portfolio_card .card_content .project_links:hover {
        background-color: var(--primary-clr);
        color: var(--white-clr);
    }
`;

export default ProjectCard;
