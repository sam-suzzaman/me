import Navbar from "./components/shared/Navbar";
import LandingPage from "./page/LandingPage";

import { Reoverlay, ModalContainer } from "reoverlay";
import {
    ModalLayerOne,
    LayerTwoVideoModal,
} from "./components/shared/Modals/Modals";
import Footer from "./components/shared/Footer";
import ScrollbarIndicator from "./components/shared/ScrollbarIndicator";

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
            <ScrollbarIndicator />
            <LandingPage />
            <Footer />
            <ModalContainer />
        </>
    );
}

export default App;
