import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import image from "../../assets/images/projects_screen_plate.png";

export default function ProjectsScreenPlate() {
  const texture = useLoader(THREE.TextureLoader, image);
  return (
    <group rotation-y={(90 * Math.PI) / 180} position={[-0.85, 1.02, 0]}>
      <mesh position={[0.335, -0.25, 0]}>
        <planeBufferGeometry attach="geometry" args={[0.67, 0.5]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </group>
  );
}
