import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import HomeHero from "../components/Hero/HomeHero"
import EmailListFormDisplay from "../components/EmailListForm/EmailListFormDisplay"
import About from "../components/About/About"

import company from '../images/company/duy-pham-Cecb0_8Hx-o-unsplash.jpg'

const Index = () => {
  return (
    <div>
      <Layout>
        <Helmet title="Welcome to ConcertParty">
          <meta
            name="description"
            content="Concert Party is a global community connectiong music and show lovers to the concert around the world"
          />
          <meta name="image" content={company} />
        </Helmet>
        <HomeHero />
        <EmailListFormDisplay />
        <About />
      </Layout>
    </div>
  )
}

export default Index
