import React, { useState } from "react";
import styled from "styled-components";

import { Reoverlay } from "reoverlay";
import ModalLayerOneUI from "./ModalLayerOneUI";

const ProjectCard = ({ project }) => {
    const OpenModalLayerOne = () => {
        Reoverlay.showModal("ModalLayerOne", {
            ui: <ModalLayerOneUI project={project} />,
            // onConfirm: () => {
            //     console.log("confirmed");
            // },
        });
    };
    return (
        <Wrapper>
            <div class="portfolio_card">
                <div class="card_content">
                    <img src={project.thumbnail} class="one" alt="BgImage" />
                    <div className="temp">
                        <div class="caption">
                            <h2>{project.title}</h2>
                            <p>
                                {project.description.length > 100
                                    ? project.description.slice(0, 100) + "..."
                                    : project.description}
                            </p>
                            <div
                                class="project_links"
                                onClick={OpenModalLayerOne}
                            >
                                see detail
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 550px;
    height: 300px;
    transition: all 0.5s linear;

    .portfolio_card {
        height: 100%;
        width: 100%;
        display: block;
    }

    .portfolio_card .card_content {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        transition: all 0.3s;
        border: 3px solid var(--light-border);
        padding: 8px;
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
        background-color: rgba(0, 0, 0, 0.855);
        transition: all 0.4s;
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
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--white-clr);
        /* trick */
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.25s;
        padding: 20px 10px;
    }
    .portfolio_card .card_content:hover .caption {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.3s;
    }

    .portfolio_card .card_content .caption h2 {
        text-transform: capitalize;
        font-weight: medium;
        margin: 0;
        transition: all 0.3s;
        transform: translate(200px, -200px);
        font-size: calc(1.1rem + 0.24vw);
        color: var(--secondary-clr);
        text-align: center;
        line-height: 28px;
    }
    .portfolio_card .card_content:hover .caption h2 {
        transform: translate(0, 0);
        transition-delay: 0.3s;
    }
    .portfolio_card .card_content .caption p {
        font-size: calc(0.76rem + 0.2vw);
        font-weight: 400;
        margin-top: 18px;
        text-align: center;
        transform: translate(-200px, 200px);
        transition: all 0.3s;
        padding: 0 10px;
        line-height: 25px;
    }
    .portfolio_card .card_content:hover .caption p {
        transform: translate(0, 0);
        transition-delay: 0.5s;
        color: var(--neutral-clr);
        font-weight: lighter;
        font-family: var(--font-poppins);
        font-size: 14px;
    }
    .portfolio_card .card_content .project_links {
        text-transform: capitalize;
        font-weight: medium;
        font-size: 13px;
        letter-spacing: 1px;
        background-color: var(--accent-clr);
        border-radius: 6px;
        padding: 7px 20px;
        color: #fff;
        transition: all 0.3s linear;
        margin-top: 22px;
        cursor: pointer;
    }
    .portfolio_card .card_content .project_links:hover {
        background-color: var(--secondary-clr);
        color: var(--white-clr);
    }
`;

export default ProjectCard;
