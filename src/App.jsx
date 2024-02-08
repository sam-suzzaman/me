import Navbar from "./components/shared/Navbar";
import LandingPage from "./page/LandingPage";

import { Reoverlay, ModalContainer } from "reoverlay";
import {
    ModalLayerOne,
    LayerTwoVideoModal,
} from "./components/shared/Modals/Modals";

// Here you pass your modals to Reoverlay
Reoverlay.config([
    {
        name: "ModalLayerOne",
        component: ModalLayerOne,
    },
    {
        name: "LayerTwoVideoModal",
        component: LayerTwoVideoModal,
    },
]);

function App() {
    return (
        <>
            <Navbar />
            <LandingPage />
            <ModalContainer />
        </>
    );
}

export default App;
