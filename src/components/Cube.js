import React from "react";
import { Canvas } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

// function EarthModel() {
//   const { nodes, materials } = useGLTF("earth.glb"); // Load the earth.glb model

//   return (
//     <mesh
//       geometry={nodes.Sphere.geometry} // Assuming the earth model is a sphere
//       material={materials.Material} // Use the appropriate material from the model
//     />
//   );
// }

export default function EarthCanvas() {
  const { scene } = useGLTF("8k_mercury.glb");
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <ambientLight intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <primitive object={scene} />
    </Canvas>
  );
}
