import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import "../index.css";
import { useFrame } from "react-three-fiber";

import { OrbitControls, Stars } from "@react-three/drei";
import { AmbientLight } from "three";
function Box() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });
  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="gray" />
    </mesh>
  );
}
export default function GlassCube() {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Box />
    </Canvas>
  );
}
