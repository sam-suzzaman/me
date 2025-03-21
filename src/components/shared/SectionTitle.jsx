import React from "react";
import styled from "styled-components";

const SectionTitle = ({ title, subtitle }) => {
    return (
        <Wrapper>
            <div className="sec_title">
                <p className="subtitle">{subtitle}</p>
                <h2 className="title">{title}</h2>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .sec_title {
        text-transform: capitalize;
        text-align: center;
        position: relative;
        /* margin-bottom: calc(30px + 2vw); */
        margin-bottom: calc(2rem + 2vh);
    }
    .sec_title::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(24px + 1.5vw);
        height: 4px;
        background-color: var(--accent-clr);
        border-radius: 20px;
    }
    .sec_title .title {
        font-family: var(--font-roboto);
        color: var(--primary-clr);
        font-size: calc(1.1rem + 1.3vw);
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: 0.5px;
    }
    .sec_title .subtitle {
        font-family: var(--font-poppins);
        font-size: calc(0.75rem + 0.3vw);
        font-weight: medium;
        font-style: italic;
        text-transform: capitalize;
        letter-spacing: 1px;
        color: var(--secondary-clr);
        margin-bottom: 8px;
    }
`;

export default SectionTitle;
