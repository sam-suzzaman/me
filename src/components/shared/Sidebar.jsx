import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { PiStepsDuotone } from "react-icons/pi";
import { Link } from "react-scroll";

const Sidebar = () => {
    return (
        <div className="sidebar-inner-container">
            {/* <a href="/" className="brand">
                S.
            </a> */}
            <ul className="menu sidebar-menu">
                <li>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    >
                        <IoHomeOutline className="menu-icon" /> home
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
                        <CiCircleInfo className="menu-icon" /> about
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
                        <PiStepsDuotone className="menu-icon" /> skill
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
                        <MdOutlineMedicalServices className="menu-icon" />
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
                        <FaBriefcase className="menu-icon" /> portfolio
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
                        <BsEnvelope className="menu-icon" />
                        contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
