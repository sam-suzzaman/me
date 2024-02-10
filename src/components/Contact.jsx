import React from "react";
import SectionTitle from "./shared/SectionTitle";
import styled from "styled-components";
import ContactInfo from "./Contact/ContactInfo";
import ContactForm from "./Contact/ContactForm";
import Location from "./Contact/Location";

const Contact = () => {
    return (
        <Wrapper>
            <SectionTitle title="get in touch" subtitle="contact" />
            <div className="contact_container">
                <ContactInfo />
                <ContactForm />
            </div>
            <Location />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    .contact_container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 500px));
        grid-column-gap: 3rem;
        justify-content: space-between;
        /* padding: 0 2rem; */
    }
    @media screen and (max-width: 900px) {
        .contact_container {
            grid-template-columns: 1fr;
            grid-row-gap: 3rem;
            grid-column-gap: 0;
            justify-content: center;
        }
        .contact_container .left {
            order: 2;
        }
        .contact_container .right {
            order: 1;
        }
    }
    .contact_container h4 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: calc(0.9rem + 0.3vw);
        letter-spacing: 1px;
        color: var(--accent-clr);
        margin-bottom: 2rem;
        position: relative;
    }
    .contact_container h4::after {
        content: "";
        width: 45px;
        height: 2px;
        border-radius: 3px;
        background-color: var(--color-accent);
        position: absolute;
        bottom: -5px;
        left: 0;
    }

    .contact_location iframe {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        width: 100%;
        height: 300px;
    }
`;
export default Contact;
