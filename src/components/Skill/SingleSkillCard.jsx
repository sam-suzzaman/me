import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const SingleSkillCard = ({ name, value, status }) => {
    const controls = useAnimation();
    useEffect(() => {
        const observer = new IntersectionObserver((items) => {
            items.forEach((item) => {
                if (
                    item.isIntersecting &&
                    item.target.dataset.progress === value.toString()
                ) {
                    const progress =
                        parseFloat(item.target.dataset.progress) / 100;
                    const circleLength = -219.99078369140625; // Correct circle length
                    const strokeDashoffset = circleLength * (1 - progress); // Calculate strokeDashoffset
                    controls.start({
                        strokeDashoffset,
                        transition: { duration: 1, ease: "linear" },
                    });
                } else {
                    controls.start({
                        strokeDashoffset: -219.99078369140625,
                        transition: { duration: 1, ease: "linear" },
                    }); // Reset strokeDashoffset
                }
            });
        });

        const skillDiv = document.querySelector(
            `.skill[data-progress="${value}"]`
        );
        observer.observe(skillDiv);

        return () => observer.disconnect();
    }, [value, controls]);

    return (
        <div className="skill" data-progress={value}>
            <svg className="progress" viewBox="0 0 80 80">
                <motion.path
                    className="track"
                    d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                />
                <motion.path
                    className="fill"
                    d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
                    strokeWidth="5"
                    initial={{
                        strokeDasharray: 219.99078369140625,
                        strokeDashoffset: -219.99078369140625,
                    }}
                    animate={controls}
                />
                <text
                    className="value"
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    fontSize="calc(0.7rem + 0.1vw)"
                    fontWeight="700"
                    letterSpacing="1px"
                >
                    {value}%
                </text>
            </svg>
            <h4 className="title">{name}</h4>
            <h4 className="subtitle">{status}</h4>
        </div>
    );
};

export default SingleSkillCard;
