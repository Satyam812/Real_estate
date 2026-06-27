import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

/* ── Luxury Villa Model (procedural) ── */
function VillaModel() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
    }
  })

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#c9a96e',
    metalness: 0.85,
    roughness: 0.15,
    envMapIntensity: 2,
  }), [])

  const concreteMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    metalness: 0.1,
    roughness: 0.85,
    envMapIntensity: 0.5,
  }), [])

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#88ccff',
    metalness: 0,
    roughness: 0,
    transmission: 0.92,
    thickness: 0.3,
    envMapIntensity: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0,
    ior: 1.5,
    transparent: true,
    opacity: 0.4,
  }), [])

  const whiteMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#e8e0d4',
    metalness: 0.05,
    roughness: 0.6,
    envMapIntensity: 0.8,
  }), [])

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={0.85}>
      {/* Main base platform */}
      <mesh position={[0, -0.6, 0]} material={concreteMaterial} castShadow receiveShadow>
        <boxGeometry args={[4.5, 0.12, 3.2]} />
      </mesh>

      {/* Lower level - main body */}
      <mesh position={[0, 0, 0]} material={whiteMaterial} castShadow>
        <boxGeometry args={[3.8, 1.1, 2.6]} />
      </mesh>

      {/* Upper level - offset */}
      <mesh position={[-0.4, 1.05, -0.2]} material={whiteMaterial} castShadow>
        <boxGeometry args={[2.6, 0.9, 2.1]} />
      </mesh>

      {/* Roof accent */}
      <mesh position={[-0.4, 1.55, -0.2]} material={concreteMaterial} castShadow>
        <boxGeometry args={[2.8, 0.06, 2.3]} />
      </mesh>

      {/* Glass panels - front */}
      <mesh position={[0, 0.15, 1.31]} material={glassMaterial}>
        <boxGeometry args={[2.8, 0.8, 0.04]} />
      </mesh>

      {/* Glass panels - upper front */}
      <mesh position={[-0.4, 1.1, 0.86]} material={glassMaterial}>
        <boxGeometry args={[1.8, 0.6, 0.04]} />
      </mesh>

      {/* Glass panel - side */}
      <mesh position={[1.91, 0.15, 0]} material={glassMaterial}>
        <boxGeometry args={[0.04, 0.8, 1.8]} />
      </mesh>

      {/* Terrace / balcony */}
      <mesh position={[1.2, 0.56, 0.8]} material={concreteMaterial} castShadow>
        <boxGeometry args={[1.4, 0.06, 1.2]} />
      </mesh>

      {/* Terrace railing */}
      <mesh position={[1.2, 0.72, 1.39]} material={goldMaterial}>
        <boxGeometry args={[1.3, 0.28, 0.02]} />
      </mesh>

      {/* Pool */}
      <mesh position={[1.5, -0.52, 1.8]} receiveShadow>
        <boxGeometry args={[2.2, 0.08, 0.9]} />
        <meshPhysicalMaterial 
          color="#1a5f7a" 
          metalness={0.3} 
          roughness={0.1} 
          transmission={0.6}
          thickness={0.5}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Pool border */}
      <mesh position={[1.5, -0.5, 1.8]} material={whiteMaterial}>
        <boxGeometry args={[2.4, 0.04, 1.1]} />
      </mesh>

      {/* Gold accent strips */}
      <mesh position={[0, 0.58, 1.32]} material={goldMaterial}>
        <boxGeometry args={[3.8, 0.04, 0.02]} />
      </mesh>
      <mesh position={[-0.4, 1.52, 0.87]} material={goldMaterial}>
        <boxGeometry args={[2.6, 0.03, 0.02]} />
      </mesh>

      {/* Entrance pillars */}
      <mesh position={[-1.2, 0, 1.35]} material={goldMaterial} castShadow>
        <boxGeometry args={[0.06, 1.1, 0.06]} />
      </mesh>
      <mesh position={[-0.2, 0, 1.35]} material={goldMaterial} castShadow>
        <boxGeometry args={[0.06, 1.1, 0.06]} />
      </mesh>

      {/* Decorative vertical accent */}
      <mesh position={[-1.9, 0.5, 0]} material={concreteMaterial} castShadow>
        <boxGeometry args={[0.08, 2.2, 0.8]} />
      </mesh>
    </group>
  )
}

/* ── Floating wireframe elements ── */
function FloatingWireframes() {
  const group1 = useRef()
  const group2 = useRef()
  const group3 = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group1.current) {
      group1.current.rotation.x = Math.sin(t * 0.2) * 0.3
      group1.current.rotation.z = Math.cos(t * 0.15) * 0.2
      group1.current.position.y = Math.sin(t * 0.4) * 0.3 + 2
    }
    if (group2.current) {
      group2.current.rotation.y = t * 0.1
      group2.current.rotation.x = Math.cos(t * 0.25) * 0.2
      group2.current.position.y = Math.sin(t * 0.35 + 1) * 0.25 - 1.5
    }
    if (group3.current) {
      group3.current.rotation.z = t * 0.08
      group3.current.rotation.y = Math.sin(t * 0.18) * 0.3
      group3.current.position.y = Math.sin(t * 0.3 + 2) * 0.2 + 0.5
    }
  })

  const wireframeMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#c9a96e',
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  }), [])

  const wireframeMatLight = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#c9a96e',
    wireframe: true,
    transparent: true,
    opacity: 0.06,
  }), [])

  return (
    <>
      <group ref={group1} position={[3.5, 2, -1]}>
        <mesh material={wireframeMat}>
          <icosahedronGeometry args={[0.8, 1]} />
        </mesh>
      </group>
      <group ref={group2} position={[-3, -1.5, -2]}>
        <mesh material={wireframeMatLight}>
          <octahedronGeometry args={[1, 0]} />
        </mesh>
      </group>
      <group ref={group3} position={[2.5, 0.5, -3]}>
        <mesh material={wireframeMat}>
          <dodecahedronGeometry args={[0.5, 0]} />
        </mesh>
      </group>

      {/* Floating ring */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-2.5, 1.5, -1.5]}>
          <torusGeometry args={[0.6, 0.02, 16, 48]} />
          <meshBasicMaterial color="#c9a96e" transparent opacity={0.15} />
        </mesh>
      </Float>

      {/* Floating points */}
      <FloatingParticles />
    </>
  )
}

/* ── Particle field ── */
function FloatingParticles() {
  const pointsRef = useRef()
  const count = 60

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#c9a96e"
        size={0.03}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

/* ── Mouse-reactive camera ── */
function CameraRig() {
  const { camera } = useThree()

  useFrame((state) => {
    const { pointer } = state
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.8, 0.03)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.5 + pointer.y * 0.4, 0.03)
    camera.lookAt(0, 0, 0)
  })

  return null
}

/* ── Main Scene Export ── */
export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [5, 2.5, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        style={{ background: 'transparent' }}
      >
        <fog attach="fog" args={['#0a0a0a', 8, 22]} />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[8, 10, 5]} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          color="#fff5e6"
        />
        <pointLight position={[-4, 3, -2]} intensity={0.4} color="#c9a96e" />
        <pointLight position={[3, 1, 4]} intensity={0.3} color="#88aacc" />
        <spotLight 
          position={[0, 8, 0]} 
          angle={0.4} 
          penumbra={1} 
          intensity={0.5} 
          color="#c9a96e"
        />

        {/* Environment */}
        <Environment preset="city" environmentIntensity={0.4} />

        {/* Villa */}
        <VillaModel />

        {/* Wireframes */}
        <FloatingWireframes />

        {/* Ground shadow */}
        <ContactShadows 
          position={[0, -0.65, 0]} 
          opacity={0.35} 
          scale={12} 
          blur={2.5} 
          far={6}
          color="#000000"
        />

        {/* Camera rig */}
        <CameraRig />

        {/* Post-processing */}
        <EffectComposer>
          <Bloom
            intensity={0.15}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
            radius={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
