import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const TabContainer = ({ projects }) => {
    return (
        <Wrapper>
            <div className="tab_container">
                {projects?.map((project, index) => {
                    return (
                        <ProjectCard
                            project={project}
                            index={index}
                            key={project.id}
                        />
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .tab_container {
        display: flex;
        flex-wrap: wrap;
        gap: calc(1.5rem + 0.6vw);
        justify-content: center;
        align-items: center;
    }
    .tab_card {
        width: 100%;
        height: 100%;
        background-color: var(--primary-clr);
    }
`;
export default TabContainer;
