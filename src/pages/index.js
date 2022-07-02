import React from "react"
import Layout from "../components/Layout"
import HomeHero from "../components/Hero/HomeHero"
import EmailListFormDisplay from '../components/EmailListForm/EmailListFormDisplay';
import About from "../components/About/About";

const Index = () => {
  return (
    <div>
      <Layout>
        <HomeHero />
        <EmailListFormDisplay />
        <About />
      </Layout>
    </div>
  )
}

export default Index
