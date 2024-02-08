import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SkillIcon from "./SkillIcons";

const AllSkillList = () => {
    const [skillData, setSkillData] = useState([]);

    useEffect(() => {
        fetch("Database/SkillListData.json")
            .then((res) => res.json())
            .then((res) => setSkillData(res))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Wrapper>
            {skillData?.map((skill) => {
                return <SkillIcon skill={skill} />;
            })}
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: calc(2rem + 2vw);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 22px;
`;

export default AllSkillList;
