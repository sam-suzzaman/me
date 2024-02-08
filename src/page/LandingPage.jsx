import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
} from "react-scroll";
import { FaArrowUp } from "react-icons/fa6";
import About from "../components/About";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Skill from "../components/Skill";

const LandingPage = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // to controll show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 70) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // to controll section scrolling
    useEffect(() => {
        Events.scrollEvent.register("begin", (to, element) => {
            // console.log("begin", to, element);
        });
        Events.scrollEvent.register("end", (to, element) => {
            // console.log("end", to, element);
        });
        scrollSpy.update();
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    // scroll to top handlerr
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <Wrapper>
            {showScrollButton && (
                <div className="scroll_to_top" onClick={scrollToTop}>
                    <FaArrowUp />
                </div>
            )}
            <Element name="home">
                <div className="section hero_wrapper">
                    <div className="sec_container hero_sec">
                        <Hero />
                    </div>
                </div>
            </Element>
            <Element name="about">
                <div className="section about_wrapper">
                    <div className="sec_container">
                        <About />
                    </div>
                </div>
            </Element>
            <Element name="skill">
                <div className="section">
                    <div className="sec_container">
                        <Skill />
                    </div>
                </div>
            </Element>
            <Element name="service">
                <div className="section">
                    <div className="sec_container">
                        <Service />
                    </div>
                </div>
            </Element>
            <Element name="portfolio">
                <div className="section">
                    <div className="sec_container">
                        <Portfolio />
                    </div>
                </div>
            </Element>
            <Element name="contact">
                <div className="section">
                    <div className="sec_container">
                        <Contact />
                    </div>
                </div>
            </Element>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .section {
        min-height: calc(100vh - 60px);
    }
    .sec_container {
        height: 100%;
        padding: calc(2rem + 2vh) 0;
    }
    @media screen and (max-width: 1200px) {
        .section {
            padding: 0 1.75rem;
        }
    }
    .hero_wrapper {
        background-image: linear-gradient(
                to top,
                rgba(255, 255, 255, 0.9),
                rgba(255, 255, 255, 0.85)
            ),
            url("assets/bg.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hero_sec {
        padding: 0;
    }
    .about_wrapper {
        background-color: var(--section-bg-clr);
    }
    .scroll_to_top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        cursor: pointer;
        background-color: var(--accent-clr);
        color: var(--white-clr);
        font-size: 16px;
        padding: 12px;
        border-radius: 4px;
        transition: all 0.3s linear;
    }
    .scroll_to_top:hover {
        background-color: var(--secondary-clr);
    }
`;
export default LandingPage;
