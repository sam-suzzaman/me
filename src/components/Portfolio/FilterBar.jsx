import React from "react";
import styled from "styled-components";

const FilterBar = ({ categories, categoryType, setCategoryType }) => {
    return (
        <Wrapper>
            <div class="tab_bar_container">
                <div className="tabs">
                    {categories?.map((category) => {
                        return (
                            <button
                                className={`tab_btn ${
                                    category.name == categoryType
                                        ? "active"
                                        : ""
                                }`}
                                key={category.id}
                                onClick={() => setCategoryType(category.name)}
                            >
                                {category.name}
                            </button>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .tab_bar_container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: calc(30px + 5vh);
    }
    .tabs {
        display: inline-flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        background-color: var(--neutral-clr);
    }

    .tabs .tab_btn {
        display: inline-block;
        border: none;
        border-right: 1px solid var(--light-border);
        outline: none;
        background-color: transparent;
        font-size: calc(0.75rem + 0.1vw);
        color: var(--primary-clr);
        font-weight: medium;
        font-family: var(--font-roboto);
        padding: 10px calc(1.5rem + 2vw);
        cursor: pointer;
        transition: all 0.4s linear;
    }
    .tabs .tab_btn:hover {
        background-color: var(--primary-clr);
        color: var(--white-clr);
    }
    .tabs .tab_btn.active {
        background-color: var(--primary-clr);
        color: var(--white-clr);
    }
    .tabs .tab_btn:last-child {
        border-right: none;
    }
    @media screen and (max-width: 520px) {
        .tabs {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            align-items: center;
        }
        .tabs .tab_btn {
            border-bottom: 1px solid var(--light-border);
        }
        .tabs .tab_btn:nth-child(2) {
            border-right: none;
        }
    }
    @media screen and (max-width: 290px) {
        .tabs {
            display: grid;
            grid-template-columns: 1fr;
            justify-content: center;
            align-items: center;
        }
        .tabs .tab_btn {
            border-right: none;
        }
        .tabs .tab_btn:last-child {
            border-bottom: none;
        }
    }
`;

export default FilterBar;
