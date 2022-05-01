import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { useMemo } from "react";

import Background from "./components/background/background";

import Model from "./components/three/Room.js";

function App() {
  return (
    <div className="container">
      <Background />
      <div className="canvas-container">
        <Canvas shadows>
          <Suspense fallback={null}>
            <ambientLight intensity={0.125} color={"#B9DDFF"} />
            <directionalLight
              position={[10, 7.5, 20]}
              lookAt={[0, 0, 0]}
              castShadow={true}
              shadow-mapSize-height={512}
              shadow-mapSize-width={512}
              intensity={4}
              color={"#F8C585"}
            />
            <pointLight
              position={[0.5, 2, -0.5]}
              distance={3}
              decay={1}
              intensity={1.5}
              color={"#D1EBFF"}
            />
            <Model scale={0.5} />
            <OrbitControls zoom={1} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
