import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import ResumeDownloadHandler from "../../utils/ResumeDownloadHandler";

const Button = ({ name, icon, active, scrollTo }) => {
    if (icon && scrollTo) {
        return (
            <LinkWrapper2>
                <Link
                    to={scrollTo}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className="NavBtn"
                >
                    <span className="btn_icon">{icon}</span> {name}
                </Link>
            </LinkWrapper2>
        );
    }
    if (scrollTo) {
        return (
            <LinkWrapper>
                <Link
                    to={scrollTo}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className="NavBtn"
                >
                    {name}
                </Link>
            </LinkWrapper>
        );
    }
    if (icon && !active) {
        return (
            <BUTTON onClick={ResumeDownloadHandler}>
                <span className="btn_icon">{icon}</span>
                {name}
            </BUTTON>
        );
    }
    if (active && icon) {
        return (
            <BUTTON2 onClick={ResumeDownloadHandler}>
                <span className="btn_icon">{icon}</span>
                {name}
            </BUTTON2>
        );
    }
    return <BUTTON>{name}</BUTTON>;
};

const BUTTON = styled.button`
    color: var(--primary-clr);
    font-family: var(--font-poppins);
    font-weight: lighter;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--secondary-clr);
    transition: color 0.5s;
    z-index: 1;
    font-size: calc(13px + 0.2vw);
    border-radius: 4px;
    padding: calc(3px + 0.1vw) calc(14px + 0.9vw);
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        background: var(--primary-clr);
        border-radius: 80%;
    }

    &:hover {
        color: var(--white-clr);
        border-color: var(--neutral-clr);
    }

    &:before {
        top: 100%;
        left: 100%;
        right: -100%;
        bottom: -100%;
        transition: all 0.7s;
    }

    &:hover:before {
        top: -30px;
        left: -30px;
        bottom: -50px;
        right: -50px;
    }
    .btn_icon {
        display: flex;
        align-items: center;
        font-size: calc(1.3rem + 0.2vw);
        margin-right: calc(4px + 0.3vw);
    }
`;
const BUTTON2 = styled.button`
    color: var(--white-clr);
    font-family: var(--font-poppins);
    font-weight: lighter;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--accent-clr);
    transition: color 0.5s;
    z-index: 1;
    font-size: calc(14px + 0.2vw);
    border-radius: 4px;
    padding: calc(5.5px + 0.1vw) calc(14px + 0.9vw);
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        background: var(--primary-clr);
        border-radius: 80%;
    }

    &:hover {
        color: var(--primary-clr);
        border-color: var(--secondary-clr);
    }

    &:before {
        top: -30px;
        left: -30px;
        bottom: -50px;
        right: -50px;
        transition: all 0.7s;
    }

    &:hover:before {
        top: 100%;
        left: 100%;
        right: -100%;
        bottom: -100%;
    }
    .btn_icon {
        display: flex;
        align-items: center;
        font-size: calc(1rem + 0.2vw);
        margin-right: calc(4px + 0.3vw);
    }
`;

const LinkWrapper = styled.button`
    color: var(--white-clr);
    font-family: var(--font-poppins);
    font-weight: lighter;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--accent-clr);
    transition: color 0.5s;
    z-index: 1;
    font-size: calc(14px + 0.2vw);
    border-radius: 4px;
    padding: calc(5.5px + 0.1vw) calc(14px + 0.9vw);
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        background: var(--primary-clr);
        border-radius: 80%;
    }

    &:hover {
        color: var(--primary-clr);
        border-color: var(--secondary-clr);
    }

    &:before {
        top: -30px;
        left: -30px;
        bottom: -50px;
        right: -50px;
        transition: all 0.7s;
    }

    &:hover:before {
        top: 100%;
        left: 100%;
        right: -100%;
        bottom: -100%;
    }
    .btn_icon {
        display: flex;
        align-items: center;
        font-size: calc(1rem + 0.2vw);
        margin-right: calc(4px + 0.3vw);
    }
`;

const LinkWrapper2 = styled.button`
    color: var(--primary-clr);
    font-family: var(--font-poppins);
    font-weight: lighter;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--secondary-clr);
    transition: color 0.5s;
    z-index: 1;
    font-size: calc(13px + 0.2vw);
    border-radius: 4px;
    padding: calc(3px + 0.1vw) calc(14px + 0.9vw);
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    a.NavBtn {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        background: var(--primary-clr);
        border-radius: 80%;
    }

    &:hover {
        color: var(--white-clr);
        border-color: var(--neutral-clr);
    }

    &:before {
        top: 100%;
        left: 100%;
        right: -100%;
        bottom: -100%;
        transition: all 0.7s;
    }

    &:hover:before {
        top: -30px;
        left: -30px;
        bottom: -50px;
        right: -50px;
    }
    .btn_icon {
        display: flex;
        align-items: center;
        font-size: calc(1.3rem + 0.2vw);
        margin-right: calc(4px + 0.3vw);
    }
`;
export default Button;
