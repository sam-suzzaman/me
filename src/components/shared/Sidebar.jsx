import React from "react";
import { Link } from "react-scroll";

const Sidebar = ({ navData }) => {
    return (
        <div className="sidebar-inner-container">
            <ul className="menu sidebar-menu">
                {navData?.map((data) => {
                    return (
                        <li key={data.id}>
                            <Link
                                activeClass="active"
                                to={data.to}
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                {data.icon}
                                {data.to}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
