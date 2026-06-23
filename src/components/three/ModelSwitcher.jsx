import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import gsap from 'gsap';

import BMWM3 from "../models/Bmw_m3_competition_g80";
import BMWM4 from "../models/Bmw_m4_modified_widebody_knitro_builds-transformed";
import { useGSAP } from "@gsap/react";
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if (!group) return;

    group.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group, x) => {
    if (!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

    const bmwm3model = useRef();
    const bmwm4model = useRef();

    const showLargeModel = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(() => {
        if (showLargeModel) {
            moveGroup(bmwm3model.current, -OFFSET_DISTANCE);
            moveGroup(bmwm4model.current, 0);

            fadeMeshes(bmwm3model.current, 0);
            fadeMeshes(bmwm4model.current, 1);
        } else {
            moveGroup(bmwm3model.current, 0);
            moveGroup(bmwm4model.current, OFFSET_DISTANCE);

            fadeMeshes(bmwm3model.current, 1);
            fadeMeshes(bmwm4model.current, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, tension: 0, friction: 26 }
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={bmwm3model}>
                    <BMWM3 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={bmwm4model}>
                    <BMWM4 scale={isMobile ? 0.25 : 0.4} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
