import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const fadeInVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

const SkillIcon = ({ skill, index }) => {
    return (
        <motion.div
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            transition={{ duration: 0.5, delay: 0.06 * index }}
        >
            <Wrapper>
                <img src={skill.pic} alt="icon" className="iconImg" />
                {/* <div className="icon">
                    <img src={skill.pic} alt="icon" />
                </div> */}
                {/* <div className="content">
                    <h6 className="title">{skill.name}</h6>
                    <p className="status">{skill.status}</p>
                </div> */}
            </Wrapper>
        </motion.div>
    );
};
const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid var(--light-border);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 16px;
    /* position: relative;
    overflow: hidden; */

    .iconImg {
        width: 100%;
        object-fit: cover;
    }

    /* .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;
        transform: scale(0) translateY(100%);
        transition: all 0.3s ease-in-out;
        transform-origin: bottom;
    }
    &:hover {
        .content {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
    }
    .content .title {
        color: gold;
        font-weight: bold;
        font-size: calc(10px + 0.3vw);
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }
    .content .status {
        color: var(--primary-);
        font-weight: normal;
        font-size: 12px;
        letter-spacing: 0.8px;
        text-transform: capitalize;
        margin-top: 7px;
        background-color: #ffffffe1;
        padding: 1px 8px;
        border-radius: 4px;
    } */
    .icon {
        width: 100%;
        height: 100%;
        max-width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon img {
        width: 100%;
        object-fit: cover;
        /* transform: scale(1); */
        /* -webkit-filter: grayscale(100%);
        filter: grayscale(100%); */
        /* transition: all 0.3s linear; */
    }
    &:hover .icon img {
        /* -webkit-filter: grayscale(10%);
        filter: grayscale(10%); */
        /* transform: scale(1.2); */
    }
`;
export default SkillIcon;
