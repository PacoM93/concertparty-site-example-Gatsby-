import React from "react"
import WhyConcertParty from "./WhyConcertParty"

import "./about.scss"
import ContactInfo from './ContactInfo';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <WhyConcertParty />
          </div>
          <div className="col-4">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
