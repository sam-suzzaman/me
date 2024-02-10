import React, { useEffect, useState } from "react";
import SectionTitle from "./shared/SectionTitle";
import styled from "styled-components";
import ServiceCard from "./Service/ServiceCard";

const Service = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch("Database/ServiceData.json")
            .then((res) => res.json())
            .then((res) => setServiceData(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Wrapper>
            <SectionTitle title="what am i offering" subtitle="top features" />
            <div className="service-container">
                {serviceData?.map((service, index) => {
                    return (
                        <ServiceCard
                            service={service}
                            index={index}
                            key={service.id}
                        />
                    );
                })}
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    .service-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        align-items: center;
        gap: calc(28px + 2vw) calc(20px + 1vw);
        margin-top: calc(30px + 6vh);
    }
    @media screen and (max-width: 900px) {
        .service-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 600px) {
        .service-container {
            gap: calc(28px + 4vw);
            grid-template-columns: minmax(auto, 400px);
        }
    }
`;
export default Service;
