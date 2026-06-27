import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Procedural Palm Tree (Abstract Luxury Style)
function AbstractPalmTree({ position, scale = 1 }) {
  const trunkMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#2a2a2a', roughness: 0.9, metalness: 0.1 }), [])
  const leavesMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#112211', roughness: 0.8, metalness: 0.1 }), [])
  
  return (
    <group position={position} scale={scale}>
      <mesh material={trunkMat} position={[0, 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.2, 4, 8]} />
      </mesh>
      {/* Abstract spherical canopy */}
      <mesh material={leavesMat} position={[0, 4, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1.5, 16, 16]} />
      </mesh>
    </group>
  )
}

// Procedural Car (Sleek abstract shape)
function AbstractCar({ position, rotation }) {
  const carMat = useMemo(() => new THREE.MeshPhysicalMaterial({ 
    color: '#050505', metalness: 0.9, roughness: 0.1, clearcoat: 1 
  }), [])
  const glassMat = useMemo(() => new THREE.MeshPhysicalMaterial({ 
    color: '#111', transmission: 0.9, opacity: 1, transparent: true, roughness: 0, metalness: 0.5 
  }), [])

  return (
    <group position={position} rotation={rotation}>
      {/* Body */}
      <mesh material={carMat} position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.6, 4.5]} />
      </mesh>
      {/* Cabin */}
      <mesh material={glassMat} position={[0, 0.9, -0.2]}>
        <boxGeometry args={[1.6, 0.5, 2]} />
      </mesh>
      {/* Wheels */}
      {[-1, 1].map((x) => 
        [-1.5, 1.5].map((z) => (
          <mesh key={`${x}-${z}`} material={new THREE.MeshStandardMaterial({ color: '#111' })} position={[x * 0.9, 0.2, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
          </mesh>
        ))
      )}
    </group>
  )
}

export default function TourModel({ smartControls }) {
  // Materials
  const glassMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.95,
    thickness: 0.5,
    clearcoat: 1,
    ior: 1.5,
    transparent: true,
    opacity: 0.3,
  }), [])

  const concreteMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#e5e3df',
    metalness: 0.1,
    roughness: 0.7,
  }), [])

  const darkWallMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    metalness: 0.2,
    roughness: 0.9,
  }), [])

  const woodMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#4a3525',
    metalness: 0.1,
    roughness: 0.8,
  }), [])

  const waterMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#0e3a4f',
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.9,
    transparent: true,
    opacity: 0.9,
  }), [])

  const goldMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#c9a96e',
    metalness: 0.8,
    roughness: 0.2,
  }), [])

  const fireplaceEmissive = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ff5500',
    emissive: '#ff3300',
    emissiveIntensity: smartControls.fireplace ? 4 : 0,
    toneMapped: false
  }), [smartControls.fireplace])

  const curatinMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 1,
    transparent: true,
    opacity: smartControls.curtains ? 0.9 : 0.1, // If true (closed), opaque. If false (open), sheer
  }), [smartControls.curtains])

  // Refs for animated elements (like water ripples)
  const poolRef = useRef()
  useFrame((state) => {
    if (poolRef.current) {
      // Simulate subtle water movement
      poolRef.current.position.y = (Math.sin(state.clock.elapsedTime * 2) * 0.01) - 0.1
    }
  })

  return (
    <group position={[0, -0.5, 0]}>
      {/* ── GROUND & LANDSCAPE ── */}
      <mesh position={[0, -0.2, 0]} receiveShadow material={new THREE.MeshStandardMaterial({ color: '#2b2b2b' })}>
        <boxGeometry args={[40, 0.4, 40]} />
      </mesh>
      
      {/* Driveway */}
      <mesh position={[-10, 0.01, 8]} receiveShadow material={new THREE.MeshStandardMaterial({ color: '#111' })}>
        <boxGeometry args={[10, 0.02, 16]} />
      </mesh>

      {/* ── ARCHITECTURE MAIN WINGS ── */}
      {/* Center Main Hall */}
      <mesh position={[0, 2.5, 0]} material={concreteMat} castShadow receiveShadow>
        <boxGeometry args={[12, 5, 10]} />
      </mesh>
      {/* Front Glass Facade */}
      <mesh position={[0, 2.5, 5.01]} material={glassMat}>
        <boxGeometry args={[11.5, 4.8, 0.1]} />
      </mesh>
      {/* Curtains behind glass */}
      <mesh position={[0, 2.5, 4.9]} material={curatinMat}>
        <boxGeometry args={[11.5, 4.8, 0.05]} />
      </mesh>

      {/* Left Wing (Garage & Guest) */}
      <mesh position={[-9, 2, 0]} material={darkWallMat} castShadow receiveShadow>
        <boxGeometry args={[6, 4, 12]} />
      </mesh>
      <mesh position={[-6, 2, 6.01]} material={woodMat}>
        <boxGeometry args={[5.5, 3.8, 0.1]} />
      </mesh>

      {/* Right Wing (Master Suite) */}
      <mesh position={[9, 3, 2]} material={concreteMat} castShadow receiveShadow>
        <boxGeometry args={[6, 6, 8]} />
      </mesh>
      <mesh position={[9, 3, 6.01]} material={glassMat}>
        <boxGeometry args={[5.5, 5.5, 0.1]} />
      </mesh>
      <mesh position={[9, 1.5, 7.5]} material={concreteMat} receiveShadow>
        <boxGeometry args={[6, 0.2, 3]} /> {/* Balcony */}
      </mesh>
      <mesh position={[9, 2.2, 8.95]} material={glassMat}>
        <boxGeometry args={[6, 1.2, 0.1]} /> {/* Balcony Glass */}
      </mesh>

      {/* ── ROOF OVERHANGS ── */}
      <mesh position={[0, 5.2, 1]} material={darkWallMat} castShadow receiveShadow>
        <boxGeometry args={[13, 0.4, 12]} />
      </mesh>
      <mesh position={[9, 6.2, 2]} material={darkWallMat} castShadow receiveShadow>
        <boxGeometry args={[7, 0.4, 10]} />
      </mesh>
      
      {/* Gold Trim */}
      <mesh position={[0, 5.4, 7.05]} material={goldMat}>
        <boxGeometry args={[13, 0.1, 0.1]} />
      </mesh>

      {/* ── INTERIOR DETAILS (Visible through glass) ── */}
      {/* Living Room Fireplace */}
      <mesh position={[0, 1, -4.5]} material={darkWallMat}>
        <boxGeometry args={[4, 3, 1]} />
      </mesh>
      <mesh position={[0, 0.5, -3.9]} material={fireplaceEmissive}>
        <boxGeometry args={[2, 0.5, 0.2]} />
      </mesh>

      {/* ── POOL & OUTDOOR ── */}
      {/* Pool Basin */}
      <mesh position={[0, -0.1, 10]} receiveShadow material={concreteMat}>
        <boxGeometry args={[10, 0.2, 6]} />
      </mesh>
      {/* Water */}
      <mesh ref={poolRef} position={[0, -0.1, 10]}>
        <boxGeometry args={[9.6, 0.15, 5.6]} />
        <primitive object={waterMat} />
      </mesh>

      {/* ── PROPS (Procedural Trees & Cars) ── */}
      <AbstractPalmTree position={[8, 0, 12]} scale={1.2} />
      <AbstractPalmTree position={[-7, 0, 14]} scale={1.5} />
      <AbstractPalmTree position={[-12, 0, -5]} scale={1.3} />

      <AbstractCar position={[-10, 0, 10]} rotation={[0, Math.PI / 6, 0]} />
      <AbstractCar position={[-8, 0, 12]} rotation={[0, Math.PI / 8, 0]} />

      {/* ── LIGHTING CONTROLS (Smart Home) ── */}
      {smartControls.interiorLights && (
        <>
          <pointLight position={[0, 4, 0]} intensity={2} distance={15} color="#ffd4a3" />
          <pointLight position={[9, 4, 2]} intensity={1.5} distance={10} color="#ffd4a3" />
          <pointLight position={[-9, 2, 0]} intensity={1} distance={10} color="#ffd4a3" />
        </>
      )}

      {smartControls.poolLights && (
        <>
          <pointLight position={[-3, -0.2, 10]} intensity={2} distance={8} color="#00ffff" />
          <pointLight position={[3, -0.2, 10]} intensity={2} distance={8} color="#00ffff" />
        </>
      )}

      {smartControls.gardenLights && (
        <>
          <pointLight position={[8, 0.5, 12]} intensity={1} distance={5} color="#c9a96e" />
          <pointLight position={[-7, 0.5, 14]} intensity={1} distance={5} color="#c9a96e" />
        </>
      )}
    </group>
  )
}
