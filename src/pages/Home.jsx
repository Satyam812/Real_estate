import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import LuxurySearch from '../components/LuxurySearch'
import Stats from '../components/Stats'
import FeaturedProperties from '../components/FeaturedProperties'

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Aether Estates | Extraordinary Luxury Real Estate</title>
        <meta name="description" content="Discover the world's most exclusive luxury properties, curated for discerning buyers. Aether Estates represents architectural mastery and uncompromising luxury." />
      </Helmet>
      <Hero />
      <LuxurySearch />
      <Stats />
      <FeaturedProperties />
    </main>
  )
}
