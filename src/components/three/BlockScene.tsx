"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import { HOUSES, STATUS_HEX, PALETTE } from "./blockData";

const SPACING = 2.6;
const WALL_HEIGHT = 1.2;
const ROOF_HEIGHT = 0.8;
const HOUSE_DEPTH = 1.0;
const PILE_TOP = 0;
const PILE_BOTTOM = -2.8;
const GROUND_Y = -0.4;
const SOIL_BOTTOM = -3.2;

function houseShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-1, 0);
  shape.lineTo(-1, WALL_HEIGHT);
  shape.lineTo(0, WALL_HEIGHT + ROOF_HEIGHT);
  shape.lineTo(1, WALL_HEIGHT);
  shape.lineTo(1, 0);
  shape.lineTo(-1, 0);
  return shape;
}

function House({
  index,
  x,
  status,
  animate,
}: {
  index: number;
  x: number;
  status: string;
  animate: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const shape = useMemo(() => houseShape(), []);
  const extrudeSettings = useMemo(
    () => ({ depth: HOUSE_DEPTH, bevelEnabled: false }),
    [],
  );
  const color = STATUS_HEX[status];
  const RISE = 1.6;
  const START_DELAY = index * 0.15;
  const DURATION = 0.7;

  useFrame((state) => {
    if (!animate || !groupRef.current) return;
    const t = Math.min(
      1,
      Math.max(0, (state.clock.elapsedTime - START_DELAY) / DURATION),
    );
    const eased = 1 - Math.pow(1 - t, 3);
    groupRef.current.position.y = -RISE * (1 - eased);
    groupRef.current.scale.setScalar(0.85 + eased * 0.15);
  });

  return (
    <group ref={groupRef} position={[x, animate ? -RISE : 0, 0]}>
      <mesh position={[0, 0, -HOUSE_DEPTH / 2]} castShadow receiveShadow>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial
          color={PALETTE.panel}
          flatShading
          roughness={0.9}
        />
        <Edges color={color} threshold={15} />
      </mesh>
      <mesh position={[0, 0.65, HOUSE_DEPTH / 2 + 0.01]}>
        <boxGeometry args={[0.32, 0.32, 0.02]} />
        <meshStandardMaterial color={PALETTE.navy} />
      </mesh>
      <mesh position={[0, PILE_TOP + (PILE_BOTTOM - PILE_TOP) / 2, 0]}>
        <boxGeometry args={[0.32, PILE_TOP - PILE_BOTTOM, 0.32]} />
        <meshStandardMaterial color={PALETTE.panel2} flatShading roughness={0.85} />
        <Edges color={color} threshold={15} />
      </mesh>
    </group>
  );
}

function Soil() {
  const width = SPACING * (HOUSES.length - 1) + 3.2;
  const depth = HOUSE_DEPTH + 1.6;
  const height = GROUND_Y - SOIL_BOTTOM;
  return (
    <mesh position={[0, GROUND_Y - height / 2, 0]} receiveShadow>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={PALETTE.panel} roughness={1} />
      <Edges color={PALETTE.steel} threshold={15} scale={1.001} />
    </mesh>
  );
}

function Scene({
  animate,
  scrollRef,
}: {
  animate: boolean;
  scrollRef: React.RefObject<number>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const cameraRef = useRef<THREE.OrthographicCamera>(null);

  useFrame((_, delta) => {
    if (animate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
    }
    if (cameraRef.current) {
      const target = 30 - scrollRef.current * 6;
      cameraRef.current.zoom += (target - cameraRef.current.zoom) * 0.06;
      cameraRef.current.lookAt(0, GROUND_Y, 0);
      cameraRef.current.updateProjectionMatrix();
    }
  });

  const positions = HOUSES.map(
    (_, i) => (i - (HOUSES.length - 1) / 2) * SPACING,
  );

  return (
    <>
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        position={[9, 6.5, 9]}
        zoom={30}
        near={0.1}
        far={100}
      />
      <ambientLight intensity={0.55} />
      <directionalLight position={[6, 10, 4]} intensity={0.9} />
      <directionalLight position={[-6, 4, -4]} intensity={0.25} />
      <group ref={groupRef} position={[0, 0.3, 0]}>
        <Soil />
        {HOUSES.map((house, i) => (
          <House
            key={i}
            index={i}
            x={positions[i]}
            status={house.status}
            animate={animate}
          />
        ))}
      </group>
    </>
  );
}

export function BlockScene({
  animate,
  scrollRef,
}: {
  animate: boolean;
  scrollRef: React.RefObject<number>;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene animate={animate} scrollRef={scrollRef} />
    </Canvas>
  );
}
