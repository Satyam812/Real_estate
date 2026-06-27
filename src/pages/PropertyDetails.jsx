import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import PropertyHero from '../components/property-details/PropertyHero'
import InteractiveVilla from '../components/property-details/InteractiveVilla'
import FloorPlan from '../components/property-details/FloorPlan'
import PropertyInfo from '../components/property-details/PropertyInfo'
import LuxuryAmenities from '../components/property-details/LuxuryAmenities'
import ImageGallery from '../components/property-details/ImageGallery'
import PropertyLocation from '../components/property-details/PropertyLocation'
import MortgageCalculator from '../components/property-details/MortgageCalculator'
import BookingForm from '../components/property-details/BookingForm'
import PropertyAdvisor from '../components/property-details/PropertyAdvisor'
import SimilarProperties from '../components/property-details/SimilarProperties'
import ClientReviews from '../components/property-details/ClientReviews'

const propertyData = {
  id: 1,
  name: 'The Belvedere',
  location: 'Amalfi Coast, Italy',
  price: '$45,500,000',
  status: 'For Sale',
  badge: 'Signature Collection',
  image: 'https://images.unsplash.com/photo-1613490908578-8326a0c78a05?q=80&w=2800&auto=format&fit=crop'
}

export default function PropertyDetails() {
  const { id } = useParams()

  return (
    <main className="bg-deep-black min-h-screen relative overflow-hidden">
      <Helmet>
        <title>The Azure Villa | Aether Estates</title>
        <meta name="description" content="Experience unparalleled luxury at The Azure Villa. A masterpiece of modern architecture with breathtaking panoramic ocean views." />
      </Helmet>
      <PropertyHero property={propertyData} />
      <InteractiveVilla />
      <PropertyInfo />
      <FloorPlan />
      <LuxuryAmenities />
      <ImageGallery />
      <PropertyLocation />
      <MortgageCalculator />
      <PropertyAdvisor />
      <BookingForm />
      <ClientReviews />
      <SimilarProperties />
    </main>
  )
}
