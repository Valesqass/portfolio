import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Float,
  Stars,
  Torus,
  Box,
  Icosahedron,
} from '@react-three/drei';
import type { Group } from 'three';

interface HeroSceneProps {
  /** When true, all motion is frozen for users who prefer reduced motion. */
  reducedMotion: boolean;
}

const Geometries = ({ reducedMotion }: HeroSceneProps) => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
  });

  // Freeze Float animation when reduced motion is requested.
  const floatSpeed = (speed: number) => (reducedMotion ? 0 : speed);

  return (
    <group ref={groupRef}>
      <Float speed={floatSpeed(2)} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[1.5, 0]} position={[0, 0, 0]}>
          <meshBasicMaterial color="black" wireframe />
        </Icosahedron>
      </Float>

      <Float speed={floatSpeed(1.5)} rotationIntensity={2} floatIntensity={0.5}>
        <Torus args={[1.2, 0.02, 16, 100]} position={[2, 1, -2]} rotation={[0.5, 0, 0]}>
          <meshBasicMaterial color="black" />
        </Torus>
      </Float>

      <Float speed={floatSpeed(2.5)} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box args={[0.5, 0.5, 0.5]} position={[-2, -1.5, 1]}>
          <meshBasicMaterial color="black" wireframe />
        </Box>
      </Float>

      <Float speed={floatSpeed(3)} rotationIntensity={3} floatIntensity={0.5}>
        <Icosahedron args={[0.3, 0]} position={[2.5, -1, 0]}>
          <meshBasicMaterial color="black" wireframe />
        </Icosahedron>
      </Float>

      <Float speed={floatSpeed(1)} rotationIntensity={0.5} floatIntensity={1}>
        <Torus args={[3, 0.01, 16, 100]} position={[0, 0, 0]} rotation={[1.5, 0, 0]}>
          <meshBasicMaterial color="#333" transparent opacity={0.3} />
        </Torus>
      </Float>

      {/* Lighter star field than before; frozen when reduced motion is on. */}
      <Stars
        radius={100}
        depth={50}
        count={reducedMotion ? 400 : 900}
        factor={4}
        saturation={0}
        fade
        speed={reducedMotion ? 0 : 1}
      />
    </group>
  );
};

const HeroScene = ({ reducedMotion }: HeroSceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="bg-white"
      // Cap the device pixel ratio so high-DPI phones don't render 3x the pixels.
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? 'demand' : 'always'}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Geometries reducedMotion={reducedMotion} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.5}
      />
      <fog attach="fog" args={['white', 5, 15]} />
    </Canvas>
  );
};

export default HeroScene;
