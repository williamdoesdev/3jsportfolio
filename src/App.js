import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Suspense, useState, useRef } from "react";
import * as THREE from "three";

import Background from "./components/background.js";
import Nav from "./components/nav.js";
import StartScreen from "./components/startScreen.js";
import ProjectsScreen from "./components/projectsScreen.js";
import ContactScreen from "./components/contactScreen.js";
import PhotosScreen from "./components/photosScreen.js";

import Model from "./components/three/room.js";
import StartScreenPlate from "./components/three/startScreenPlate.js";
import ProjectsScreenPlate from "./components/three/projectsScreenPlate.js";
import PhotosScreenPlate from "./components/three/photosScreenPlate.js";

function App() {
  const [cameraTargetPos, setCameraTargetPos] = useState([-0.6, 0.77, 0.36]);
  const [cameraTargetLook, setCameraTargetLook] = useState([-1, 0.77, 0.48]);
  const [userOrbitControls, setUserOrbitControls] = useState(false);
  const [renderMonitorScreen, setRenderMonitorScreen] = useState(1);

  const handleChangeCameraPos = (pos) => {
    setCameraTargetPos(pos);
  };

  const handleChangeCameraLook = (look) => {
    setCameraTargetLook(look);
  };

  const handleToggleOrbitControls = () => {
    setUserOrbitControls(!userOrbitControls);
  };

  const renderOrbitControls = () => {
    if (userOrbitControls) {
      return <OrbitControls pan="false" />;
    }
  };

  const renderStartScreen = () => {
    if (renderMonitorScreen === 1) {
      return (
        <StartScreen
          onToggleOrbitControls={handleToggleOrbitControls}
          onToggleStartScreen={setRenderMonitorScreen}
        />
      );
    } else {
      return;
    }
  };

  const renderProjectsScreen = () => {
    if (renderMonitorScreen === 2) {
      return (
        <Html
          transform
          rotation-y={(90 * Math.PI) / 180}
          position={[-0.85, 1.02, 0]}
          distanceFactor={0.141}
        >
          <ProjectsScreen />
        </Html>
      );
    } else {
      return <ProjectsScreenPlate />;
    }
  };

  const renderContactScreen = () => {
    if (renderMonitorScreen === 4) {
      return (
        <Html
          transform
          rotation-z={(76 * Math.PI) / 180}
          rotation-x={(270 * Math.PI) / 180}
          position={[-0.35, 0.31, -1.25]}
          distanceFactor={0.141}
          zIndexRange={[100, 10]}
        >
          <ContactScreen />
        </Html>
      );
    } else {
      return;
    }
  };

  const renderPhotosScreen = () => {
    if (renderMonitorScreen === 3) {
      return (
        <Html
          transform
          rotation-y={(75 * Math.PI) / 180}
          position={[-0.83, 1.02, -0.76]}
          distanceFactor={0.141}
        >
          <PhotosScreen />
        </Html>
      );
    } else {
      return <PhotosScreenPlate />;
    }
  };

  return (
    <div className="container">
      <Background />
      <Nav
        onChangeCameraPos={handleChangeCameraPos}
        onChangeCameraLook={handleChangeCameraLook}
        onToggleOrbitControls={handleToggleOrbitControls}
        onRenderMonitorScreen={setRenderMonitorScreen}
      />
      {renderStartScreen()}
      <div className="canvas-container">
        <Canvas
          shadows
          camera={{ position: [-0.6, 0.77, 0.36] }}
          style={{ position: "absolute" }}
        >
          <Suspense fallback={null}>
            <CameraMarker
              cameraTargetPos={cameraTargetPos}
              cameraTargetLook={cameraTargetLook}
              userOrbitControls={userOrbitControls}
            />
            <StartScreenPlate />
            {renderProjectsScreen()}
            {renderContactScreen()}
            {renderPhotosScreen()}
            <ambientLight intensity={0.125} color={"#B9DDFF"} />
            <directionalLight
              position={[10, 7.5, 20]}
              lookAt={[0, 0, 0]}
              castShadow={true}
              shadow-mapSize-height={2048}
              shadow-mapSize-width={2048}
              shadow-camera-far={40}
              shadow-camera-left={-2.5}
              shadow-camera-right={2.5}
              shadow-camera-top={2.5}
              shadow-camera-bottom={-2.5}
              shadow-bias={-0.0004}
              intensity={4}
              color={"#F8C585"}
            />
            <pointLight
              position={[0.5, 2, -0.25]}
              distance={3}
              decay={1}
              intensity={1.5}
              color={"#D1EBFF"}
            />
            <Model scale={0.5} />
            {renderOrbitControls()}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

function CameraMarker(props) {
  let reachedDest = false;
  let posVec = new THREE.Vector3(3, 2, -3);
  let lookVec = new THREE.Vector3(-1, 0.77, 0.48);
  const origin = new THREE.Vector3(0, 0, 0);
  let markerRef = useRef();

  useFrame((state) => {
    state.camera.lookAt(markerRef.current.position);
    if (!props.userOrbitControls) {
      markerRef.current.position.lerp(
        lookVec.set(...props.cameraTargetLook),
        0.05
      );
      state.camera.position.lerp(posVec.set(...props.cameraTargetPos), 0.05);
    } else {
      if (state.camera.position.distanceTo(posVec) < 0.5) {
        reachedDest = true;
      }
      if (!reachedDest) {
        markerRef.current.position.lerp(origin, 0.05);
        state.camera.position.lerp(posVec.set(3, 2, -3), 0.05);
      }
    }
  });

  return <mesh ref={markerRef} position={[-1, 0.77, 0.48]}></mesh>;
}

export default App;
