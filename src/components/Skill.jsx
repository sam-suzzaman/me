import React from "react";
import SectionTitle from "./shared/SectionTitle";
import Summery from "./Skill/Summery";
import AllSkillList from "./Skill/AllSkillList";

const Skill = () => {
    return (
        <div>
            <SectionTitle title="explored topics" subtitle="skills" />
            <Summery />
            <AllSkillList />
        </div>
    );
};

export default Skill;
