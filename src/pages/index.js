import React from "react"
import Layout from "../components/Layout"
import HomeHero from "../components/Hero/HomeHero"
import EmailListForm from "../components/EmailListForm/EmailListForm";

const Index = () => {
  return (
    <div>
      <Layout>
        <HomeHero />
        <EmailListForm />
      </Layout>
    </div>
  )
}

export default Index
