import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import Tilt from "react-parallax-tilt";

const Banner = () => {
    const [images, setImages] = useState([assets.Banner2, assets.Banner1, assets.Banner3]);

    const handleImageClick = (index) => {
        const newImages = [...images];
        const [clicked] = newImages.splice(index, 1);
        newImages.splice(1, 0, clicked); // Move clicked image to the center (index 1)
        setImages(newImages);
    };

    return (
        <div className="flex flex-col flex-1/2 justify-center items-center mt-20 gap-13">
            <div className="flex flex-col items-center font-black text-[27px] leading-[44px] tracking-normal">
                <p>Get Started With JairamTex</p>
                <p>Bedsheet, Towels & Kitchen Napkins on</p>
                <p>Online</p>
            </div>

            <div
                className="relative w-screen p-[25.4px] rounded-lg"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(75, 56, 123, 0) 0%, rgba(75, 56, 123, 0.576) 40.3%, rgba(75, 56, 123, 0.504) 74.33%, rgba(255, 255, 255, 0.576) 98.83%, rgba(255, 255, 255, 0.576) 118.9%)",
                }}
            >
                <marquee
                    className="font-[Lalezar] text-[109.15px] tracking-normal banner-text text-[rgba(255,255,255,0.48)]"
                    scrollamount="20"
                    onMouseOver={(e) => e.target.stop()}
                    onMouseOut={(e) => e.target.start()}
                >
                    JAIRAM TEXTILES JAIRAM TEXTILES
                </marquee>

                <div className="relative z-10 flex flex-row justify-center top-[-30px] items-center gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative ${index === 1 ? "z-20" : "z-10"}`}
                        >
                            <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1500}
                                className="rounded-lg"
                            >
                                <motion.img
                                    src={image}
                                    alt=""
                                    className="cursor-pointer rounded-lg w-[300px] aspect-video"
                                    initial={{ scale: 1 }}
                                    animate={{
                                        width: index === 1 ? "400px" : "400px",
                                        height: index === 1 ? "230px" : "auto",
                                        scale: index === 1 ? 1.2 : 1,
                                        opacity: index === 1 ? 1 : 0.9,
                                        transition: { duration: 0.4 },
                                    }}
                                    onClick={() => handleImageClick(index)}
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-transparent rounded-lg pointer-events-none ${
                                        index === 1 ? "left-[-40px] top-[25px] w-[480px] h-[230px]" : ""
                                    }`}
                                ></div>
                            </Tilt>
                        </div>
                    ))}
                    <div className="absolute z-20 text-[rgba(255,255,255,0.92)] font-semibold text-4xl bottom-0">
                        Fast Movings
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
