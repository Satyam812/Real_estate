import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, N8AO } from '@react-three/postprocessing'
import * as THREE from 'three'
import TourModel from './TourModel'
import TourEnvironment from './TourEnvironment'
import CameraController from './CameraController'

export default function TourCanvas({ activeRoom, timeOfDay, smartControls }) {
  return (
    <Canvas
      camera={{ position: [15, 12, 18], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: timeOfDay === 'day' ? 1.2 : 0.8,
      }}
      shadows
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <TourEnvironment timeOfDay={timeOfDay} />
        
        <TourModel smartControls={smartControls} />
        
        <CameraController activeRoom={activeRoom} />

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
            intensity={timeOfDay === 'day' ? 0.3 : 0.8}
            luminanceThreshold={timeOfDay === 'day' ? 0.9 : 0.2}
            luminanceSmoothing={0.9}
            radius={0.8}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
