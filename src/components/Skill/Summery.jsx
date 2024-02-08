import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SingleSkillCard from "./SingleSkillCard";

const Summery = () => {
    const [skillData, setSkillData] = useState([]);

    // Fetch data
    useEffect(() => {
        fetch("Database/SkillSummeryData.json")
            .then((res) => res.json())
            .then((data) => setSkillData(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Wrapper>
            <div className="skills">
                {skillData?.map((skill) => {
                    return (
                        <SingleSkillCard
                            key={skill.id}
                            name={skill.name}
                            value={skill.value}
                            status={skill.status}
                        />
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .skills {
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: calc(1.5rem + 2vw);
    }
    .skills .skill {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .progress {
        width: 150px;
        height: 150px;
    }

    .progress .fill {
        fill: transparent;
        /* progress circle inside color */
        stroke-width: 5;
        transform: rotate(90deg) translate(0px, -80px);
    }
    .progress .track {
        fill: var(--white-clr);
        /* progress circle inside color */
        stroke-width: 5;
        transform: rotate(90deg) translate(0px, -80px);
    }
    .progress .track {
        stroke: var(--neutral-clr);
        /* progress path color */
    }
    .progress .fill {
        stroke: var(--primary-clr);
        /* progress color */
        /* stroke-dasharray: 219.99078369140625;
        stroke-dashoffset: -219.99078369140625; */
        /* transition: stroke-dashoffset 1s; */
    }

    .skills .skill .value {
        fill: var(--primary-clr);
        text-anchor: middle;
        /* dominant-baseline: middle; */
        font-size: calc(0.7rem + 0.1vw);
        font-weight: 700;
        letter-spacing: 1px;
    }

    .skills .skill .title {
        margin: 6px 0 0;
        color: var(--primary-clr);
        font-size: calc(1rem + 0.3vw);
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .skills .skill .subtitle {
        margin: 3px 0 0;
        color: var(--secondary-clr);
        font-size: calc(0.6rem + 0.2vw);
        font-weight: 400;
        letter-spacing: 1.5px;
        text-transform: capitalize;
    }
`;

export default Summery;
