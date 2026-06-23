import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/showcase.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket M4 Competition</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, Ultimate driving machine
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                The BMW M4 is a high-performance sports coupe developed by BMW’s M division, combining aggressive design with advanced engineering.
                            </p>
                            <p>
                                The M4 stands out with its bold exterior styling, aerodynamic elements, and premium interior equipped with modern technology and driver-focused controls.
                            </p>
                            <p className="text-primary">Learn more about BMW Models</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster performance</h3>
                            <p>for users</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>2x horsePower</h3>
                            <p>for aentheists</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase
