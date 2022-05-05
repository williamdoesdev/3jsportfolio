import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState, useRef } from "react";
import * as THREE from "three";

import Background from "./components/background.js";
import Nav from "./components/nav.js";

import Model from "./components/three/room.js";

function App() {
  const [cameraTargetPos, setCameraTargetPos] = useState([-0.55, 0.75, 0.4]);
  const [cameraTargetLook, setCameraTargetLook] = useState([-1, 0.75, 0.5]);
  const [userOrbitControls, setUserOrbitControls] = useState(false);

  const handleChangeCameraPos = (pos) => {
    setCameraTargetPos(pos)
  }

  const handleChangeCameraLook = (look) => {
    setCameraTargetLook(look)
  }

  const handleToggleOrbitControls = () => {
    setUserOrbitControls(!userOrbitControls)
  }

  const renderOrbitControls = () => {
    if(userOrbitControls) {
      return (
        <OrbitControls />
      )
    }
  }

  return (
    <div className="container">
      <Background />
      <Nav onChangeCameraPos={handleChangeCameraPos} onChangeCameraLook= {handleChangeCameraLook} onToggleOrbitControls={handleToggleOrbitControls}/>
      <div className="canvas-container">
        <Canvas shadows camera={{position: [-0.55, 0.75, 0.4]}} style={{position: 'absolute'}}>
          <CameraMarker cameraTargetPos={cameraTargetPos} cameraTargetLook={cameraTargetLook} userOrbitControls={userOrbitControls}/>
          <Suspense fallback={null}>
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

function CameraMarker(props){
  let reachedDest = false
  let posVec = new THREE.Vector3(3, 2, -3)
  let lookVec = new THREE.Vector3(-1, 0.75, 0.5)
  const origin = new THREE.Vector3(0, 0, 0)
  let markerRef = useRef()

  useFrame(state => {
    state.camera.lookAt(markerRef.current.position)
    if(!props.userOrbitControls) {
      markerRef.current.position.lerp(lookVec.set(...props.cameraTargetLook), 0.05)
      state.camera.position.lerp(posVec.set(...props.cameraTargetPos), 0.05);
    }else{
      if(state.camera.position.distanceTo(posVec) < 0.5) {
        reachedDest = true
      }
      if(!reachedDest) {
        markerRef.current.position.lerp(origin, 0.05)
        state.camera.position.lerp(posVec.set(3, 2, -3), 0.05);
      }
    }
  })

  return (
  <mesh ref={markerRef} position={[-1, 0.75, 0.5]}>
  </mesh>
  )
}

export default App;
