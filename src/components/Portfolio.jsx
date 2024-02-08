import React, { useEffect, useState } from "react";
import SectionTitle from "./shared/SectionTitle";
import FilterBar from "./Portfolio/FilterBar";
import TabContainer from "./Portfolio/TabContainer";

const Portfolio = () => {
    const [data, setData] = useState([]);
    const [filterdData, setFilteredData] = useState([]);
    const [categoryType, setCategoryType] = useState("All");

    // Fetching data
    useEffect(() => {
        fetch("Database/PortfolioData.json")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err));
    }, []);

    // Fitering Data
    useEffect(() => {
        if (categoryType == "All") {
            setFilteredData(data[1]?.projects);
        } else {
            const filteringData = data[1]?.projects?.filter(
                (item) => item.category == categoryType
            );
            setFilteredData(filteringData);
        }
    }, [data, categoryType]);

    return (
        <div>
            <SectionTitle title="recent projects" subtitle="portfolio" />
            <FilterBar
                categories={data[0]?.categories}
                categoryType={categoryType}
                setCategoryType={setCategoryType}
            />
            <TabContainer projects={filterdData} />
        </div>
    );
};

export default Portfolio;
