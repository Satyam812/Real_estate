import { useState, useRef, useEffect, Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom, N8AO } from '@react-three/postprocessing'
import * as THREE from 'three'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import VillaModelDetailed from './VillaModelDetailed'

const views = [
  { id: 'overview', name: 'Overview', position: [12, 8, 12], target: [0, 1, 0] },
  { id: 'pool', name: 'Swimming Pool', position: [4, 1.5, 7], target: [2, 0.1, 3.5] },
  { id: 'balcony', name: 'Master Balcony', position: [8, 4, 6], target: [4, 2, -1] },
  { id: 'terrace', name: 'Upper Terrace', position: [-7, 5, 2], target: [-4.5, 2.1, -1] },
  { id: 'garage', name: 'Garage', position: [-8, 2, 6], target: [-4.5, 0.7, 1.5] },
]

function CameraController({ activeView }) {
  const { camera } = useThree()
  const controlsRef = useRef()

  useEffect(() => {
    const view = views.find(v => v.id === activeView)
    if (view && controlsRef.current) {
      // Animate Camera Position
      gsap.to(camera.position, {
        x: view.position[0],
        y: view.position[1],
        z: view.position[2],
        duration: 2,
        ease: 'power3.inOut'
      })

      // Animate OrbitControls Target
      gsap.to(controlsRef.current.target, {
        x: view.target[0],
        y: view.target[1],
        z: view.target[2],
        duration: 2,
        ease: 'power3.inOut'
      })
    }
  }, [activeView, camera.position])

  return (
    <OrbitControls 
      ref={controlsRef} 
      makeDefault 
      minDistance={3} 
      maxDistance={25}
      maxPolarAngle={Math.PI / 2 + 0.1} // Allow looking slightly from below
      enablePan={false}
      enableDamping
      dampingFactor={0.05}
    />
  )
}

export default function InteractiveVilla() {
  const [timeOfDay, setTimeOfDay] = useState('day') // 'day' | 'night'
  const [activeView, setActiveView] = useState('overview')

  return (
    <section className="relative w-full h-screen min-h-[800px] bg-deep-black overflow-hidden" aria-label="Interactive 3D Villa">
      {/* UI Overlay */}
      <div className="absolute top-10 left-0 w-full z-10 pointer-events-none px-6 md:px-12 flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="pointer-events-auto"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="w-8 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              360° Experience
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-warm-white tracking-tight">
            Interactive <span className="italic text-gradient-gold">Architecture</span>
          </h2>
        </motion.div>

        {/* Day/Night Toggle */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="pointer-events-auto flex bg-glass-strong backdrop-blur-md rounded-full p-1 border border-glass-border shadow-xl"
        >
          <button 
            onClick={() => setTimeOfDay('day')}
            className={`px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
              timeOfDay === 'day' ? 'bg-champagne text-deep-black' : 'text-soft-grey hover:text-warm-white'
            }`}
          >
            Day
          </button>
          <button 
            onClick={() => setTimeOfDay('night')}
            className={`px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
              timeOfDay === 'night' ? 'bg-deep-black text-champagne border border-champagne/30' : 'text-soft-grey hover:text-warm-white'
            }`}
          >
            Night
          </button>
        </motion.div>
      </div>

      {/* View Selectors */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none w-full max-w-4xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pointer-events-auto flex flex-wrap justify-center gap-3"
        >
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`px-5 py-2.5 rounded-full text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-500 backdrop-blur-md ${
                activeView === view.id 
                  ? 'bg-champagne/20 border border-champagne/50 text-champagne shadow-[0_0_15px_rgba(201,169,110,0.3)]' 
                  : 'bg-glass-strong border border-glass-border text-warm-white/70 hover:bg-glass-frost hover:text-warm-white hover:border-champagne/30'
              }`}
            >
              {view.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [12, 8, 12], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: timeOfDay === 'day' ? 1.1 : 0.8,
        }}
        shadows
      >
        <color attach="background" args={[timeOfDay === 'day' ? '#e6f0f5' : '#0a0d14']} />
        
        {timeOfDay === 'day' && <fog attach="fog" args={['#e6f0f5', 10, 45]} />}
        {timeOfDay === 'night' && <fog attach="fog" args={['#0a0d14', 5, 30]} />}

        <Suspense fallback={null}>
          <Environment preset={timeOfDay === 'day' ? 'city' : 'night'} />
          
          {/* Lighting */}
          <ambientLight intensity={timeOfDay === 'day' ? 0.4 : 0.1} />
          
          {timeOfDay === 'day' ? (
            <directionalLight 
              position={[10, 15, 10]} 
              intensity={1.5} 
              castShadow 
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
              shadow-bias={-0.0001}
              color="#fff5e6"
            />
          ) : (
            <>
              <directionalLight 
                position={[-10, 5, -10]} 
                intensity={0.2} 
                color="#88ccff"
              />
              <pointLight position={[2, 1, 3.5]} intensity={1.5} color="#c9a96e" distance={10} />
              <pointLight position={[-4.5, 2, -1]} intensity={1.2} color="#c9a96e" distance={8} />
              <pointLight position={[4, 2, -1]} intensity={1} color="#c9a96e" distance={10} />
            </>
          )}

          {/* Model */}
          <VillaModelDetailed timeOfDay={timeOfDay} />

          {/* Shadows */}
          <ContactShadows 
            position={[0, -0.69, 0]} 
            opacity={timeOfDay === 'day' ? 0.5 : 0.2} 
            scale={25} 
            blur={2} 
            far={10}
            color="#000000"
          />

          <CameraController activeView={activeView} />

          {/* Post Processing */}
          <EffectComposer disableNormalPass>
            <N8AO 
              halfRes 
              color="black" 
              aoRadius={2} 
              intensity={1.5} 
              aoSamples={6} 
              denoiseSamples={4} 
            />
            <Bloom
              intensity={timeOfDay === 'day' ? 0.2 : 0.8}
              luminanceThreshold={timeOfDay === 'day' ? 0.9 : 0.2}
              luminanceSmoothing={0.9}
              radius={0.8}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </section>
  )
}
