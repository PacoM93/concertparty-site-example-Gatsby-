import React from "react"
import {Carousel} from "react-bootstrap"

import anthony from '../../images/hero/anthony-delanoix-hzgs56Ze49s-unsplash.jpg'
import jordon from '../../images/hero/jordon-conner-tIr-PWgSYB4-unsplash.jpg'
import yvette from '../../images/hero/yvette-de-wit-8XLapfNMW04-unsplash.jpg'
import max from '../../images/hero/max-brinton-HvWWo_dyFJQ-unsplash.jpg'



const HomeHero = () => {
  return (
    <div className="home-hero">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={anthony}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={yvette}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={max}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomeHero
