import React from "react";

export default function Room() {
  return (
    <mesh>
      <boxGeometry args={[10, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
}
