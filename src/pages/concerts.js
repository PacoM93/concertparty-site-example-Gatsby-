import React from "react"
import Layout from "../components/Layout"
import HomeHero from "../components/Hero/HomeHero"
import FeaturedConcerts from "../components/Concerts/FeaturedConcerts"
import { Helmet } from "react-helmet"

import concert from '../images/hero/yvette-de-wit-8XLapfNMW04-unsplash.jpg'

const concerts = () => {
  return (
    <Layout>
      <Helmet title="Featured Concerts | ConcertParty">
        <meta
          name="description"
          content="Explore and experience the gratest music on earth."
        />
        <meta name="image" content={concert} />
      </Helmet>
      <HomeHero />
      <FeaturedConcerts />
    </Layout>
  )
}

export default concerts
