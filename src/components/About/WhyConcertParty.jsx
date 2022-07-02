import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import image from '../../images/company/duy-pham-Cecb0_8Hx-o-unsplash.jpg'

const WhyConcertParty = () => {
  const data = useStaticQuery(graphql`
  {
    markdownRemark {
      frontmatter {
        title
      }
      html
    }
  }
  
  `)
  console.log(data)

  return (
    <div className="why-concert-party">
      <h4>{data.markdownRemark.frontmatter.title}</h4>
      <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}></div>
      <img src={image} alt="company"></img>
    </div>
  )
}

export default WhyConcertParty
