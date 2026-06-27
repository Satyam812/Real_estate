import PropertiesHero from '../components/properties/PropertiesHero'
import PropertiesSearch from '../components/properties/PropertiesSearch'
import PropertyCategories from '../components/properties/PropertyCategories'
import PropertiesGrid from '../components/properties/PropertiesGrid'
import SignatureProperty from '../components/properties/SignatureProperty'
import PropertyMap from '../components/properties/PropertyMap'
import Testimonials from '../components/properties/Testimonials'
import PropertiesCTA from '../components/properties/PropertiesCTA'
import { Helmet } from 'react-helmet-async'

export default function Properties() {
  return (
    <main className="bg-deep-black min-h-screen">
      <Helmet>
        <title>Exclusive Portfolio | Aether Estates</title>
        <meta name="description" content="Explore our exclusive portfolio of ultra-luxury real estate, historical estates, modern villas, and private islands across the globe." />
      </Helmet>
      <PropertiesHero />
      <PropertiesSearch />
      <PropertyCategories />
      <PropertiesGrid />
      <SignatureProperty />
      <PropertyMap />
      <Testimonials />
      <PropertiesCTA />
    </main>
  )
}
