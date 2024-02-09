import React from "react";
import styled from "styled-components";

const SkillIcon = ({ skill }) => {
    return (
        <Wrapper>
            <div className="icon">
                <img src={skill.pic} alt="icon" />
            </div>
            <div className="content">
                <h6 className="title">{skill.name}</h6>
                <p className="status">{skill.status}</p>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 140px;
    height: 120px;
    border: 1px solid var(--light-border);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    position: relative;
    overflow: hidden;

    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: var(--neutral-clr); */
        background-color: #0091ffea;
        border-radius: 4px;
        transform: scale(0);
        opacity: 0;
        transition: all 0.3s linear;
    }
    &:hover {
        .content {
            transform: scale(1);
            opacity: 1;
        }
    }
    .content .title {
        color: #fff;
        font-weight: normal;
        font-size: calc(12px + 0.2vw);
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }
    .content .status {
        color: #000;
        font-weight: lighter;
        font-size: 12px;
        letter-spacing: 0.5px;
        text-transform: capitalize;
        margin-top: 7px;
        background-color: #cce9ff8d;
        padding: 1px 8px;
        border-radius: 4px;
    }
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
        transform: scale(1);
        transition: all 0.3s linear;
    }
    &:hover .icon img {
        transform: scale(1.3);
    }
`;
export default SkillIcon;
