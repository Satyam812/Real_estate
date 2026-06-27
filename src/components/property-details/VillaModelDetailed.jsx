import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function VillaModelDetailed({ timeOfDay }) {
  const groupRef = useRef()

  // Materials
  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#c9a96e',
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: timeOfDay === 'day' ? 2 : 1,
  }), [timeOfDay])

  const concreteMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    metalness: 0.2,
    roughness: 0.8,
    envMapIntensity: 0.8,
  }), [])

  const darkConcrete = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0a0a0a',
    metalness: 0.3,
    roughness: 0.9,
  }), [])

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: timeOfDay === 'day' ? '#88ccff' : '#ffeebb',
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.95,
    thickness: 0.5,
    envMapIntensity: timeOfDay === 'day' ? 1.5 : 2.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    ior: 1.5,
    transparent: true,
    opacity: 0.3,
    emissive: timeOfDay === 'night' ? '#c9a96e' : '#000000',
    emissiveIntensity: timeOfDay === 'night' ? 0.2 : 0,
  }), [timeOfDay])

  const whiteMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#f0ede6',
    metalness: 0.05,
    roughness: 0.4,
    envMapIntensity: 1,
  }), [])

  const woodMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#4a3525',
    metalness: 0.1,
    roughness: 0.7,
  }), [])

  const waterMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#1a5f7a',
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.8,
    thickness: 1,
    envMapIntensity: 2,
    transparent: true,
    opacity: 0.8,
  }), [])

  // Very subtle floating animation for the entire model
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* --- Foundation --- */}
      <mesh position={[0, -0.2, 0]} material={concreteMaterial} castShadow receiveShadow>
        <boxGeometry args={[12, 0.4, 10]} />
      </mesh>

      {/* --- Main Structure (Center) --- */}
      <mesh position={[0, 1.5, -1]} material={whiteMaterial} castShadow receiveShadow>
        <boxGeometry args={[6, 3, 5]} />
      </mesh>
      
      {/* Center Glass Facade */}
      <mesh position={[0, 1.5, 1.55]} material={glassMaterial}>
        <boxGeometry args={[5.6, 2.8, 0.1]} />
      </mesh>

      {/* --- Left Wing (Garage & Upper Terrace) --- */}
      <mesh position={[-4.5, 1, -1]} material={darkConcrete} castShadow receiveShadow>
        <boxGeometry args={[3, 2, 5]} />
      </mesh>
      {/* Garage Door */}
      <mesh position={[-4.5, 0.7, 1.51]} material={woodMaterial}>
        <boxGeometry args={[2.5, 1.4, 0.05]} />
      </mesh>
      {/* Upper Terrace Floor */}
      <mesh position={[-4.5, 2.1, -1]} material={woodMaterial} receiveShadow>
        <boxGeometry args={[3, 0.2, 5]} />
      </mesh>
      {/* Upper Terrace Glass Railing */}
      <mesh position={[-4.5, 2.6, 1.45]} material={glassMaterial}>
        <boxGeometry args={[3, 0.8, 0.05]} />
      </mesh>
      <mesh position={[-5.95, 2.6, -1]} material={glassMaterial}>
        <boxGeometry args={[0.05, 0.8, 5]} />
      </mesh>

      {/* --- Right Wing (Master Suite & Balcony) --- */}
      <mesh position={[4, 2, -1]} material={whiteMaterial} castShadow receiveShadow>
        <boxGeometry args={[4, 4, 4]} />
      </mesh>
      <mesh position={[4, 2, 1.05]} material={glassMaterial}>
        <boxGeometry args={[3.6, 3.6, 0.1]} />
      </mesh>
      {/* Balcony extension */}
      <mesh position={[4, 1.2, 2]} material={concreteMaterial} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.2, 2]} />
      </mesh>
      {/* Balcony Railing */}
      <mesh position={[4, 1.7, 2.95]} material={glassMaterial}>
        <boxGeometry args={[4.2, 1, 0.05]} />
      </mesh>
      
      {/* --- Roof & Overhangs --- */}
      <mesh position={[0, 3.1, -0.5]} material={concreteMaterial} castShadow receiveShadow>
        <boxGeometry args={[7, 0.2, 6.5]} />
      </mesh>
      <mesh position={[4, 4.1, -0.5]} material={concreteMaterial} castShadow receiveShadow>
        <boxGeometry args={[4.5, 0.2, 5.5]} />
      </mesh>

      {/* --- Infinity Pool --- */}
      <mesh position={[2, 0.1, 3.5]} receiveShadow>
        <boxGeometry args={[5, 0.2, 3]} />
        <primitive object={waterMaterial} />
      </mesh>
      <mesh position={[2, -0.05, 3.5]} material={whiteMaterial}>
        <boxGeometry args={[5.4, 0.1, 3.4]} />
      </mesh>

      {/* --- Gold Accents --- */}
      <mesh position={[0, 3.2, 2.75]} material={goldMaterial}>
        <boxGeometry args={[7, 0.05, 0.05]} />
      </mesh>
      <mesh position={[4, 4.2, 2.25]} material={goldMaterial}>
        <boxGeometry args={[4.5, 0.05, 0.05]} />
      </mesh>

      {/* --- Garden / Entrance Path --- */}
      <mesh position={[-1.5, 0.01, 3.5]} material={woodMaterial} receiveShadow>
        <boxGeometry args={[2, 0.05, 3]} />
      </mesh>
    </group>
  )
}
