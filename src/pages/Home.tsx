import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Torus, Box, Icosahedron } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const Geometries = () => {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[1.5, 0]} position={[0, 0, 0]}>
          <meshBasicMaterial color="black" wireframe />
        </Icosahedron>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={0.5}>
        <Torus args={[1.2, 0.02, 16, 100]} position={[2, 1, -2]} rotation={[0.5, 0, 0]}>
          <meshBasicMaterial color="black" />
        </Torus>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box args={[0.5, 0.5, 0.5]} position={[-2, -1.5, 1]}>
          <meshBasicMaterial color="black" wireframe />
        </Box>
      </Float>

      <Float speed={3} rotationIntensity={3} floatIntensity={0.5}>
        <Icosahedron args={[0.3, 0]} position={[2.5, -1, 0]}>
          <meshBasicMaterial color="black" wireframe />
        </Icosahedron>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Torus args={[3, 0.01, 16, 100]} position={[0, 0, 0]} rotation={[1.5, 0, 0]}>
          <meshBasicMaterial color="#333" transparent opacity={0.3} />
        </Torus>
      </Float>
      
       {/* Background noise/particles */}
       <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

const AnimatedScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="bg-white">
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Geometries />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      <fog attach="fog" args={['white', 5, 15]} />
    </Canvas>
  );
};

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center bg-white text-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedScene />
      </div>

      <div className="container mx-auto px-6 z-10 relative pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-black font-medium text-lg mb-4 tracking-widest uppercase border-b border-black inline-block pb-1"
          >
            Portfolio
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold font-heading mb-6 leading-tight text-black mix-blend-exclusion"
          >
            MIKAËL LAHLOU
            <span className="block text-4xl md:text-6xl mt-4 font-light text-gray-800">
              DÉVELOPPEUR WEB
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light"
          >
            Création d'expériences digitales minimalistes et performantes. 
            Expertise en React, Three.js et Node.js.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link 
              to="/projets" 
              className="px-8 py-4 bg-black text-white font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-black border-2 border-black transition-all flex items-center justify-center gap-2 group"
            >
              Voir les projets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent text-black font-bold text-sm tracking-wider uppercase border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
