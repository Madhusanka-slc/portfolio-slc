import React from 'react';
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const DSphere = ({intensity,distort,speed,color}) => {
    return (
       
              <Canvas>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={intensity} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.1}>
                <MeshDistortMaterial
                  color={color}
                  attach="material"
                  distort={distort}
                  speed={speed}
                />
              </Sphere>
            </Canvas>
       
    );
}

export default DSphere;
