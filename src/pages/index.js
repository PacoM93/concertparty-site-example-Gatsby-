import React from "react"
import Layout from "../components/Layout"
import HomeHero from "../components/Hero/HomeHero"
import EmailListFormDisplay from '../components/EmailListForm/EmailListFormDisplay';

const Index = () => {
  return (
    <div>
      <Layout>
        <HomeHero />
        <EmailListFormDisplay />
      </Layout>
    </div>
  )
}

export default Index
