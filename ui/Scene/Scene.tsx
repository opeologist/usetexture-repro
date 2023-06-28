"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Ground } from "@/ui/Ground";
import styles from "./styles.module.css";

export const Scene = () => (
  <div className={styles.container}>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Ground />
      <OrbitControls />
      <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={50} />
    </Canvas>
  </div>
);
