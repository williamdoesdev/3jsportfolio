import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import image from "../../assets/images/photos_screen_plate.png";

export default function StartScreenPlate() {
  const texture = useLoader(THREE.TextureLoader, image);
  return (
    <group rotation-y={(75 * Math.PI) / 180} position={[-0.83, 1.02, -0.76]}>
      <mesh position={[0.335, -0.25, 0]}>
        <planeBufferGeometry attach="geometry" args={[0.67, 0.5]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </group>
  );
}
