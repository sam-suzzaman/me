import React from "react";
import styled from "styled-components";

const Loader = () => {
    return (
        <Wrapper>
            <div className="spinner"></div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .spinner {
        width: 56px;
        height: 56px;
        display: grid;
        border: 4.5px solid #0000;
        border-radius: 50%;
        border-color: #d6d8fa #0000;
        animation: spinner-e04l1k 1s infinite linear;
    }

    .spinner::before,
    .spinner::after {
        content: "";
        grid-area: 1/1;
        margin: 2.2px;
        border: inherit;
        border-radius: 50%;
    }

    .spinner::before {
        border-color: #0064b3 #0000;
        animation: inherit;
        animation-duration: 0.5s;
        animation-direction: reverse;
    }

    .spinner::after {
        margin: 8.9px;
    }

    @keyframes spinner-e04l1k {
        100% {
            transform: rotate(1turn);
        }
    }
`;

export default Loader;
