import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollbarIndicator = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
        />
    );
};

export default ScrollbarIndicator;
