import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

const fadeInVariants = {
    initial: {
        opacity: 0,
        y: "100%",
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            transition={{ duration: 0.4, delay: 0.2 * index }}
            viewport={{ once: true }}
        >
            <Wrapper key={service.id}>
                <div className="service_icon">{service.id}</div>
                <div className="card_body">
                    <h4 className="card_title">{service.title}</h4>
                    <p className="card_description">{service.description}</p>
                </div>
            </Wrapper>
        </motion.div>
    );
};
const Wrapper = styled.div`
    padding: calc(18px + 1.7vw) calc(10px + 1vw) calc(10px + 1vw);
    border-radius: 6px;
    position: relative;
    transition: all 0.4s linear;
    height: 100%;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    @media screen and (max-width: 1000px) {
        padding: calc(30px + 1vw) calc(10px + 1vw) calc(10px + 1vw);
    }
    &:hover {
        /* background-color: var(--primary-clr); */
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    }

    .service_icon {
        position: absolute;
        top: 0;
        left: 50%;
        right: 0;
        transform: translate(-50%, -50%);
        color: var(--secondary-clr);
        font-size: calc(18px + 1vw);
        font-family: var(--font-poppins);
        font-weight: bold;
        background-color: var(--white-clr);
        border-radius: 50%;
        width: 55px;
        height: 55px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--light-border);
        opacity: 0.8;
        transition: all 0.3s linear;
        transition-delay: 0.1s;
    }
    &:hover .service_icon {
        opacity: 1;
        border: 1px solid var(--primary-clr);
    }
    .card_body .card_title {
        font-size: calc(0.95rem + 0.35vw);
        text-align: center;
        font-family: var(--font-roboto);
        font-weight: medium;
        text-transform: capitalize;
        margin-bottom: 15px;
        color: var(--primary-clr);
        letter-spacing: 0.5px;
        transition: all 0.5s linear;
        transition-delay: 0.1s;
    }
    .card_body .card_description {
        font-size: calc(0.8rem + 0.1vw);
        font-weight: lighter;
        opacity: 0.7;
        font-family: var(--font-poppins);
        text-align: justify;
        color: var(--black-clr);
        line-height: 22px;
        text-overflow: clip;
        transition: all 0.5s linear;
        transition-delay: 0.1s;
    }
    &:hover .card_body .card_description {
        opacity: 0.95;
    }
`;
export default ServiceCard;
