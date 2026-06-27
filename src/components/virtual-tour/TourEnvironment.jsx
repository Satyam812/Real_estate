import { Environment, Sky, Cloud, Sparkles } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'

export default function TourEnvironment({ timeOfDay }) {
  const configs = useMemo(() => ({
    day: {
      sunPosition: [100, 40, 50],
      ambientIntensity: 0.8,
      directionalIntensity: 2.5,
      directionalColor: '#fff5e6',
      fogColor: '#e6f0f5',
      skyTurbidity: 0.1,
      skyRayleigh: 0.1,
      skyMieCoefficient: 0.005,
      skyMieDirectionalG: 0.8,
      preset: 'city'
    },
    sunset: {
      sunPosition: [-100, 5, -50],
      ambientIntensity: 0.4,
      directionalIntensity: 1.5,
      directionalColor: '#ffaa55',
      fogColor: '#ffaa55',
      skyTurbidity: 10,
      skyRayleigh: 2,
      skyMieCoefficient: 0.005,
      skyMieDirectionalG: 0.8,
      preset: 'sunset'
    },
    night: {
      sunPosition: [0, -100, 0], // Sun below horizon
      ambientIntensity: 0.1,
      directionalIntensity: 0.1,
      directionalColor: '#4466aa',
      fogColor: '#0a0d14',
      skyTurbidity: 20,
      skyRayleigh: 0.1,
      skyMieCoefficient: 0.001,
      skyMieDirectionalG: 0.1,
      preset: 'night'
    }
  }), [])

  const current = configs[timeOfDay]

  return (
    <>
      <color attach="background" args={[current.fogColor]} />
      <fog attach="fog" args={[current.fogColor, 15, 60]} />

      <Environment preset={current.preset} background={false} blur={0.8} />
      
      {/* Dynamic Sky */}
      <Sky 
        distance={450000} 
        sunPosition={current.sunPosition} 
        inclination={0} 
        azimuth={0.25} 
        turbidity={current.skyTurbidity}
        rayleigh={current.skyRayleigh}
        mieCoefficient={current.skyMieCoefficient}
        mieDirectionalG={current.skyMieDirectionalG}
      />

      {/* Lighting */}
      <ambientLight intensity={current.ambientIntensity} />
      
      {timeOfDay !== 'night' && (
        <directionalLight
          position={current.sunPosition}
          intensity={current.directionalIntensity}
          color={current.directionalColor}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={100}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-bias={-0.001}
        />
      )}

      {/* Atmospheric Effects */}
      {timeOfDay === 'night' && (
        <Sparkles count={200} scale={30} size={2} speed={0.2} opacity={0.5} color="#c9a96e" />
      )}
      
      {/* Moving Clouds */}
      <group position={[0, 20, -20]}>
        <Cloud opacity={0.5} speed={0.4} width={20} depth={1.5} segments={20} color={timeOfDay === 'sunset' ? '#ffccaa' : '#ffffff'} />
      </group>
    </>
  )
}
