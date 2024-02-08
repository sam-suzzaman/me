import React from "react";
import styled from "styled-components";

const LayerTwoVideoModalUI = ({ url }) => {
    return (
        <Wrapper>
            <iframe
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    iframe {
        width: 100%;
        height: 100%;
    }
`;

export default LayerTwoVideoModalUI;
