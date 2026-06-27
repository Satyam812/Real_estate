import { useState, useRef } from 'react'
import TourHero from '../components/virtual-tour/TourHero'
import TourCanvas from '../components/virtual-tour/TourCanvas'
import TourUI from '../components/virtual-tour/TourUI'
import ImageGallery from '../components/property-details/ImageGallery'
import BookingForm from '../components/property-details/BookingForm'
import { Helmet } from 'react-helmet-async'

export default function VirtualTour() {
  const [hasStarted, setHasStarted] = useState(false)
  const [activeRoom, setActiveRoom] = useState('overview')
  const [timeOfDay, setTimeOfDay] = useState('day')
  const [smartControls, setSmartControls] = useState({
    interiorLights: true,
    curtains: false,
    fireplace: false,
    poolLights: true,
    gardenLights: true
  })

  const galleryRef = useRef(null)
  const bookingRef = useRef(null)

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="bg-deep-black min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Immersive Virtual Tour | Aether Estates</title>
        <meta name="description" content="Take an immersive, cinematic 3D virtual tour of our flagship luxury property. Experience day-to-night transitions and smart home controls." />
      </Helmet>
      {!hasStarted && <TourHero onStart={() => setHasStarted(true)} />}
      
      {hasStarted && (
        <div className="relative w-full h-screen">
          <TourUI 
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
            timeOfDay={timeOfDay}
            setTimeOfDay={setTimeOfDay}
            smartControls={smartControls}
            setSmartControls={setSmartControls}
            onShowGallery={scrollToGallery}
            onShowBooking={scrollToBooking}
          />
          <div className="absolute inset-0 z-0">
            <TourCanvas 
              activeRoom={activeRoom}
              timeOfDay={timeOfDay}
              smartControls={smartControls}
            />
          </div>
        </div>
      )}

      {hasStarted && (
        <div className="relative z-20 bg-deep-black">
          <div ref={galleryRef}>
            <ImageGallery />
          </div>
          <div ref={bookingRef}>
            <BookingForm />
          </div>
        </div>
      )}
    </main>
  )
}
