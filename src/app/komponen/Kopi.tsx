"use client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Object = ({ src }: { src?: any }) => {
    const coffee = useGLTF(src);

    return <primitive object={coffee.scene} scale={5} position-y={-2} />;
};

export default function Kopi({ obj, nama, harga, }: { obj?: any, nama?: any, harga?: any }) {
    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                }}
            >
                <Tilt
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}

                    className="md:p-5 sm:p-4 p-3  rounded-2xl sm:w-[200px] md:w-full w-[120px]  "
                >
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 1.95,
                        }}
                        className=""
                    >
                        <h3 className="text-[#ffdcd2] font-bold md:text-[21px] sm:text-[16px] text-[10px]">
                            {nama}
                        </h3>
                    </motion.div>
                    <div className="md:mt-5 sm:mt-[10px] mb-[5px]"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.0,
                            ease: "easeInOut",
                            delay: 2.25,
                        }}
                        className="bg-[#d6a764] w-full  md:mb-5 sm:mb-[10px] mb-[5px] rounded-lg pt-5 md:h-56 sm:h-28 h-16 "
                    >
                        <Canvas
                            shadows
                            frameloop="demand"
                            dpr={[1, 5]}
                            gl={{ preserveDrawingBuffer: true }}
                            camera={{
                                fov: 45,
                                near: 0.1,
                                far: 200,
                                position: [20, 8, 12],
                            }}
                        >
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[0, 0, 0.05]} />
                            <Suspense>
                                <OrbitControls
                                    autoRotate={true}
                                    autoRotateSpeed={9}
                                    enableZoom={false}
                                    maxPolarAngle={Math.PI / 3}
                                    maxAzimuthAngle={Math.PI / 3}
                                />
                                <Object src={obj} />
                                <Preload all />
                            </Suspense>
                        </Canvas>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 2.5,
                        }}
                        className="grid grid-cols-3"
                    >
                        <p className="text-white md:my-5 sm:my-3 my-2 font-bold sm:text-base md:text-xl text-[7px]">
                            {harga}
                        </p>
                    </motion.div>
                </Tilt>
            </motion.div>
        </>
    );
}