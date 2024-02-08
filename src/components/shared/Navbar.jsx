import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GoSun, GoMoon } from "react-icons/go";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";
import Button from "./Button";

const Navbar = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const sidebar_ref = useRef();
    const sidebar_btn_ref = useRef();

    // Controlling sidebar close
    useEffect(() => {
        const outside_close_handler = (e) => {
            if (
                !sidebar_ref.current.contains(e.target) &&
                !sidebar_btn_ref.current.contains(e.target)
            ) {
                setIsShowSidebar(false);
            }
        };

        // connecting handler
        document.addEventListener("mousedown", outside_close_handler);

        // clean out
        return () => {
            document.removeEventListener("mousedown", outside_close_handler);
        };
    }, [isShowSidebar]);

    return (
        <Wrapper ref={sidebar_ref}>
            <div className="nav-container">
                <div
                    className="toggler"
                    ref={sidebar_btn_ref}
                    onClick={() => setIsShowSidebar(!isShowSidebar)}
                >
                    <HiOutlineMenuAlt1 className="toggle-icon" />
                </div>
                <div className="left">
                    <a href="/" className="brand">
                        S.
                    </a>
                </div>
                <div className="center">
                    <ul className="menu">
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                about
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="skill"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                skill
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="service"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                service
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    {/* <GoSun className="toggle-icon" /> */}
                    {/* <GoMoon className="toggle-icon" /> */}
                    <Button name="hire me" active={false} />
                </div>
            </div>
            {/* sidebar */}
            <div
                className={`sidebar-container ${isShowSidebar ? "isShow" : ""}`}
            >
                <Sidebar />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    z-index: 10;
    position: sticky;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: var(--primary-clr);
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1200px) {
        padding: 0 1.5rem;
    }
    .nav-container {
        width: 100%;
        max-width: 1200px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
    }
    .sidebar-container {
        position: absolute;
        top: 0px;
        left: 0;
        height: 100vh;
        width: 80vw;
        max-width: 220px;
        background-color: var(--primary-clr);
        transition: all 0.3s linear;
        transform: translateX(-100%);
    }
    .sidebar-container.isShow {
        transform: translateX(0%);
    }
    .brand {
        font-family: var(--font-roboto);
        font-weight: bold;
        font-size: calc(1.7rem + 1vw);
        text-decoration: none;
        color: var(--white-clr);
    }
    .sidebar-inner-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .nav-container .center .menu {
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
    }
    .sidebar-container .sidebar-menu {
        padding: 0 20px;
        /* margin-top: 20px; */
        list-style: none;
    }
    .menu li a {
        color: var(--white-clr);
        text-decoration: none;
        text-transform: capitalize;
        font-size: 15px;
        font-weight: light;
        font-family: var(--font-poppins);
        letter-spacing: 0.5px;
        padding: 0 5px;
        margin: 0 9px;
        border-radius: 4px;
        transition: all 0.3s linear;
        position: relative;
        cursor: pointer;
    }
    .sidebar-container .sidebar-menu li a {
        margin: 10px 0;
        padding: 4px 10px;
        width: 100%;
        display: inline-flex;
        align-items: center;
        /* justify-content: center; */
    }
    .sidebar-container .sidebar-menu li a .menu-icon {
        font-size: 20px;
        margin-right: 2.5vw;
    }
    .menu li a:after {
        content: "";
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background-color: var(--secondary-clr);
        position: absolute;
        left: 0;
        bottom: -5px;
        transition: all 0.3s linear;
        transform: scale(0);
        transform-origin: center;
    }
    .menu li:hover a:after {
        transform: scale(1);
    }
    .menu li a.active:after {
        transform: scale(1);
    }
    /* .menu li:hover a {
        background-color: var(--secondary-clr);
    }
    .menu li a.active {
        background-color: var(--secondary-clr);
    } */
    .right .toggle-icon {
        color: var(--white-clr);
        font-size: 21px;
        cursor: pointer;
        font-weight: bold;
        font-family: var(--font-roboto);
    }
    .toggler .toggle-icon {
        color: var(--white-clr);
        font-size: 26px;
        cursor: pointer;
        font-weight: bold;
        font-family: var(--font-roboto);
    }

    /* responsive */
    @media screen and (max-width: 664px) {
        .nav-container .center {
            display: none;
        }
    }
    @media screen and (min-width: 665px) {
        .nav-container .toggler {
            display: none;
        }
        .sidebar-container {
            display: none;
        }
    }
`;
export default Navbar;
