import React from "react";
import styled from "styled-components";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { Reoverlay } from "reoverlay";
import LayerTwoVideoModalUI from "./LayerTwoVideoModalUI";

const ModalLayerOneUI = ({ project }) => {
    // const showModal = () => {
    //     Reoverlay.showModal("LayerTwoVideoModal");
    // };
    // const OpenLayerTwoVideoModal = () => {
    //     Reoverlay.showModal("LayerTwoVideoModal", {
    //         ui: <LayerTwoVideoModalUI url={project.videoURL} />,
    //     });
    // };
    return (
        <Wrapper>
            <div className="modal_content">
                <h2>{project?.title}</h2>
                <div className="content_row">
                    {/* <div className="left">
                        <img src={project?.thumbnail} alt="project thumbnail" />
                        <div
                            className="overlay"
                            onClick={OpenLayerTwoVideoModal}
                        >
                            <FaCirclePlay className="icon" />
                        </div>
                    </div> */}
                    <div className="right">
                        <div className="description">
                            <h4>description:</h4>
                            <p>{project?.description}</p>
                        </div>
                        {/* links */}
                        <div className="">
                            <h4>Project sources:</h4>
                            <div className="project_link">
                                {project?.links[0]?.url && (
                                    <a
                                        href={project?.links[0]?.url}
                                        target="_blank"
                                    >
                                        <FaRegEye className="icon" />
                                        live site
                                    </a>
                                )}

                                {project?.links[1]?.url && (
                                    <a
                                        href={project?.links[1]?.url}
                                        target="_blank"
                                    >
                                        <FaGithub className="icon" />
                                        client
                                    </a>
                                )}

                                {project?.links[2]?.url && (
                                    <a
                                        href={project?.links[2]?.url}
                                        target="_blank"
                                    >
                                        <FaGithub className="icon" />
                                        server
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* key features */}
                        <div className="features">
                            {project?.features && <h4>Key features:</h4>}
                            <ul className="project-menu">
                                {project.features?.map((feature) => {
                                    return (
                                        <li key={feature.id}>
                                            <IoIosCheckmarkCircleOutline className="icon" />
                                            {feature.feature}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Used tech */}
                        {project?.usedTech?.map((tech) => {
                            return (
                                <div className="features" key={tech.id}>
                                    {tech?.name && (
                                        <h4>
                                            Used Technologies ({tech.name}):
                                        </h4>
                                    )}
                                    <ul className="project-menu">
                                        {tech?.techName?.map((item) => {
                                            return (
                                                <li key={item.id}>
                                                    <IoIosCheckmarkCircleOutline className="icon" />
                                                    {item.name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    /* max-width: 700px; */
    border-radius: 8px;
    padding: calc(1.2rem + 1.5vw) calc(0.8rem + 2vw);
    position: relative;
    .modal_content h2 {
        text-transform: capitalize;
        font-size: calc(1rem + 0.6vw);
        font-weight: medium;
        color: var(--primary-clr);
        text-align: center;
        position: relative;
        letter-spacing: 0cap.5px;
        font-family: var(--font-poppins);
    }
    .modal_content h2::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3.5px;
        background-color: var(--primary-clr);
        opacity: 0.6;
    }
    .modal_content .content_row {
        /* display: grid;
        grid-template-columns: minmax(auto, 300px) 1fr;
        justify-content: space-between;
        column-gap: calc(1rem + 2.2vw); */
        margin-top: calc(1rem + 2vw);
    }
    @media screen and (max-width: 850px) {
        .modal_content .content_row {
            /* display: flex;
            flex-direction: column-reverse;
            row-gap: 2rem; */
            margin-top: 3rem;
        }
        /* .modal_content .content_row .left {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        } */
    }

    /* .modal_content .content_row .left {
        width: 100%;
        max-width: 300px;
        height: 183px;
        max-height: 298px;
        border: 1px solid #00000071;
        border-radius: 6px;
        position: relative;
        overflow: hidden;
    } */

    /* .modal_content .left img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 6px;
    } */

    /* .modal_content .left .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal_content .left .overlay .icon {
        font-size: calc(28px + 1.5vw);
        color: var(--neutral-clr);
        cursor: pointer;
        transition: all 0.3s linear;
    }
    .modal_content .left .overlay .icon:hover {
        color: var(--accent-clr);
    } */
    .modal_content .right h4 {
        text-transform: capitalize;
        color: var(--primary-clr);
        font-size: calc(17px + 0.1vw);
        font-weight: normal;
    }
    .modal_content .right .description p {
        font-size: calc(13.5px + 0.12vw);
        font-weight: 400;
        text-align: justify;
        margin-top: 7px;
        line-height: 23px;
        margin-bottom: 2rem;
        color: var(--color-secondary);
    }
    .modal_content .right .project_link {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
        gap: 14px;
    }
    .modal_content .right .project_link a {
        text-decoration: none;
        color: var(--primary-clr);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        text-transform: capitalize;
        font-weight: medium;
        background-color: var(--neutral-clr);
        padding: 4px 15px;
        border-radius: 20px;
        transition: all 0.3s linear;
    }
    .modal_content .right .project_link a:hover {
        background-color: var(--secondary-clr);
        color: var(--white-clr);
    }
    .modal_content .right .project_link a .icon {
        margin-right: 4px;
    }
    .modal_content .features {
        margin-top: 2rem;
    }
    ul.project-menu {
        list-style-type: none;
        margin-top: 12px;
    }
    ul.project-menu li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: var(--black-clr);
        text-transform: capitalize;
        font-size: calc(13px + 0.12vw);
        margin-bottom: 8px;
    }
    ul.project-menu li .icon {
        margin-right: 8px;
        font-size: 17px;
        /* color: var(--black-clr); */
        color: var(--secondary-clr);
    }
`;

export default ModalLayerOneUI;
