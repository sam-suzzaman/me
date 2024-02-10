import React from "react";
import styled from "styled-components";

const Footer = () => {
    const data = new Date().getFullYear();
    return (
        <Wrapper>
            <p className="f_text">
                {data} - All Copyrights Reserved by Samsuzzaman
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    background-color: var(--gray-clr);
    color: var(--white-clr);
    padding: 0.75rem 1rem;

    p.f_text {
        font-size: calc(12px + 0.1vw);
        font-weight: light;
        text-align: center;
        letter-spacing: 0.5px;
    }
`;

export default Footer;
