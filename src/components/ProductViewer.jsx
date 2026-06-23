import useStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import BMWM3 from "./models/Bmw_m3_competition_g80.jsx";

import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from './three/ModelSwitcher.jsx'
import { useMediaQuery } from "react-responsive";



const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <section id="product-viewer">
            <h2 className="text-white font-semibold text-3xl lg:text-6xl text-center mt-70">Choose Your BMW</h2>

            <div className="controls">
                <p>Select a model to view details</p>

                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={`bg-neutral-200 ${color === '#adb5bd' ? 'active' : ''}`}></div>
                        <div
                            onClick={() => setColor('#212529')}
                            className={`bg-neutral-950 ${color === '#212529' ? 'active' : ''}`}></div>
                    </div>
                    <div className="size-control">
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>M3</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>M4</p>
                        </div>
                    </div>
                </div>
            </div>
            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
                <StudioLights />

                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
        </section>
    )
}

export default ProductViewer