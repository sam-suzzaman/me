import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import { FaRegFilePdf } from "react-icons/fa";

const Info = () => {
    return (
        <Wrapper>
            <div className="about_info_container">
                <div className="info_row">
                    <div className="left">
                        <h5>
                            Hi <span>&#9995;</span>
                        </h5>
                        <p>
                            I'm <span>Samsuzzaman</span>, a passionate and
                            dedicated Frontend Web Developer who is ready to
                            help you build brand for your business.
                        </p>
                        <p>
                            Proficient in HTML, CSS, JavaScript, React.js,
                            Node.js, Express.js, MongoDB, and Mongoose
                            ecosystem, I specialize in building dynamic,seamless
                            functionality and responsive web applications.
                        </p>
                        <p>
                            Constantly seeking new opportunities for learning
                            and growth, I embrace emerging technologies and
                            industry best practices to stay ahead in this
                            ever-evolving field.
                        </p>
                        <p>
                            I thoroughly enjoy collaborating and discussing
                            every step of the design process. So let's connect
                            and bring your digital ideas to fruition!
                        </p>
                    </div>
                    <div className="right">
                        <div className="name_row single_row">
                            <h6>Name :</h6>
                            <span className="">Samsuzzaman</span>
                        </div>
                        <div className="single_row">
                            <h6>address:</h6>
                            <span className="">
                                Kushtia, Khulna, Bangladesh
                            </span>
                        </div>
                        <div className="single_row">
                            <h6>Study:</h6>
                            <span className="">
                                Jatiya Kabi Kazi Nazrul Islam University
                            </span>
                        </div>
                        <div className="single_row">
                            <h6>Degree:</h6>
                            <span className="">
                                B.Sc in Electrical and Electronic Engineering
                            </span>
                        </div>
                        <div className="single_row">
                            <h6>emial:</h6>
                            <span className="">00samsuzzaman@gmail.com</span>
                        </div>
                        <div className="single_row">
                            <h6>Status:</h6>
                            <span className="">Available</span>
                        </div>
                        {/* <div className="single_row">
                            <h6>contact:</h6>
                            <span className="">+880-01708642294</span>
                        </div> */}
                        <div className="hero_btn_grp">
                            <Button name="resume" icon={<FaRegFilePdf />} />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    font-family: var(--font-poppins);
    .about_info_container .info_row {
        display: grid;
        grid-template-columns: 2fr 1.5fr;
        grid-column-gap: calc(1.5rem + 4vw);
    }
    @media screen and (max-width: 900px) {
        .about_info_container .info_row {
            grid-template-columns: 1fr;
            grid-row-gap: calc(2rem + 1vw);
        }
    }
    .info_row .left h5 {
        font-weight: lighter;
        font-size: calc(0.9rem + 0.2vw);
        display: flex;
        align-items: flex-end;
        margin-bottom: 20px;
    }
    .info_row .left h5 span {
        display: inline-block;
        transform: rotate(-30deg);
        margin-left: 2px;
        animation: wave 3s linear infinite;
        font-size: calc(1.3rem + 0.2vw);
    }
    @keyframes wave {
        0% {
            transform: rotate(-30deg);
        }
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-30deg);
        }
    }

    .info_row .left p {
        font-weight: 300;
        font-size: calc(0.8rem + 0.15vw);
        text-align: justify;
        line-height: 28px;
        margin-top: 0.75rem;
    }
    .info_row .left p > span {
        font-weight: bold;
        letter-spacing: 1px;
        color: var(--primary-clr);
    }
    @media screen and (min-width: 900px) {
        .info_row .right {
            margin-top: 55px;
        }
    }
    .info_row .right .single_row {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid var(--light-border);
        padding-bottom: 0.35rem;
        margin-bottom: 0.75rem;
    }
    .info_row .right .single_row h6 {
        font-weight: medium;
        font-size: calc(0.75rem + 0.1vw);
        color: var(--gray-clr);
        text-transform: capitalize;
    }
    .info_row .right .single_row span {
        font-weight: lighter;
        font-size: calc(0.8rem + 0.15vw);
        color: var(--black-clr);
        margin-left: 8px;
    }
    .hero_btn_grp {
        margin-top: 25px;
    }
`;

export default Info;
