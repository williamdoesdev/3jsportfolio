import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";

import Background from "./components/background/background";
import Room from "./components/three/room";

function App() {
  return (
    <div className="container">
      <Background />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Room />
      </Canvas>
    </div>
  );
}

export default App;
