import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import gsap from 'gsap'

export const ROOM_VIEWS = {
  overview: { position: [15, 12, 18], target: [0, 2, 0] },
  entrance: { position: [-3, 1.5, 12], target: [0, 2, 5] },
  living: { position: [0, 2, 2], target: [0, 1.5, -4] },
  kitchen: { position: [-4, 2, 1], target: [-6, 1.5, 6] },
  master: { position: [10, 4, 1], target: [9, 3, 6] },
  bathroom: { position: [8, 4, -1], target: [9, 3.5, -3] },
  balcony: { position: [12, 4, 12], target: [9, 2, 8] },
  pool: { position: [5, 1, 15], target: [0, 0, 10] },
  garden: { position: [-8, 1, 18], target: [-7, 0, 14] },
  office: { position: [2, 4, 2], target: [0, 3, -2] },
  cinema: { position: [-8, 2, -4], target: [-6, 2, -8] },
  gym: { position: [6, 2, -4], target: [4, 2, -8] },
  wine: { position: [-2, 0, -4], target: [-4, 0, -6] },
  garage: { position: [-12, 1.5, 8], target: [-10, 1, 10] }
}

export default function CameraController({ activeRoom }) {
  const { camera } = useThree()
  const controlsRef = useRef()

  useEffect(() => {
    const view = ROOM_VIEWS[activeRoom]
    if (view && controlsRef.current) {
      // Animate Camera Position
      gsap.to(camera.position, {
        x: view.position[0],
        y: view.position[1],
        z: view.position[2],
        duration: 2.5,
        ease: 'power3.inOut'
      })

      // Animate Controls Target
      gsap.to(controlsRef.current.target, {
        x: view.target[0],
        y: view.target[1],
        z: view.target[2],
        duration: 2.5,
        ease: 'power3.inOut'
      })
    }
  }, [activeRoom, camera.position])

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping
      dampingFactor={0.05}
      minDistance={1}
      maxDistance={40}
      maxPolarAngle={Math.PI / 2 - 0.01} // Don't allow camera below ground
    />
  )
}
