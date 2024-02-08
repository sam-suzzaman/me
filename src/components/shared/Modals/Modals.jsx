import React from "react";
import { ModalWrapper, Reoverlay } from "reoverlay";

import "reoverlay/lib/ModalWrapper.css";

export const ModalLayerOne = ({ ui, onConfirm }) => {
    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const showModal = () => {
        Reoverlay.showModal("ModalTwo");
    };
    return (
        <ModalWrapper>
            {ui}
            {/* <button onClick={onConfirm}>Yes</button>
            <button onClick={closeModal}>No</button>
            <button onClick={showModal}>shot m2</button> */}
        </ModalWrapper>
    );
};

export const LayerTwoVideoModal = ({ ui, onConfirm }) => {
    const closeModal = () => {
        Reoverlay.hideModal();
    };
    return (
        <ModalWrapper>
            {ui}
            {/* <button onClick={onConfirm}>Yes</button>
            <button onClick={closeModal}>No</button>
            <button onClick={showModal}>shot m2</button> */}
        </ModalWrapper>
    );
};
