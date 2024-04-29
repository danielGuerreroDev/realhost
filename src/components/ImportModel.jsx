import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function MyModel({ customRotation }) {
  const model = useGLTF("Barn_Testing.glb");
  let selectedWall;

  switch (customRotation) {
    case 10:
      selectedWall = 3;
      break;
    case 80:
      selectedWall = 4;
      break;
    case 25:
      selectedWall = 5;
      break;
    case 140:
      selectedWall = 6;
      break;
    default:
      0;
  }

  const selectedNode =
    model.nodes.LoftedBarn_6Wall_10x12_None.children[selectedWall];

  model.nodes.LoftedBarn_6Wall_10x12_None.children.forEach((item) => {
    if (item.name === selectedNode.name) {
      selectedNode.material = selectedNode.material.clone();
      selectedNode.material.color.setHex(0x33ff33);
    } else {
      item.material = selectedNode.material.clone();
      item.material.color.setHex(0xffffff);
    }
  });

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.material.metalness = 0;
    }
  });

  return (
    <Canvas camera={{ position: [0, 0, 15] }} >
      <ambientLight intensity={1} />
      <OrbitControls />
      <mesh rotation-y={customRotation}>
        <primitive object={model.scene} scale={1.5} />
      </mesh>
    </Canvas>
  );
}

export default MyModel;
