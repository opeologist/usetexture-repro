import { Plane, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export const Ground = () => {
  const texture = useTexture("https://placekitten.com/1600/1200");
  const pixelsToWorldUnit = 100;
  const { width, height } = texture.source.data;

  return (
    <Plane
      args={[width / pixelsToWorldUnit, height / pixelsToWorldUnit]}
      position={[0, 0, -0.26]}
    >
      <meshStandardMaterial side={DoubleSide} map={texture} />
    </Plane>
  );
};
