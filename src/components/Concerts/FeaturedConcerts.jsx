import React from "react"
import Concert from "./Concert"
import { graphql, Link, useStaticQuery } from "gatsby"

const FeaturedConcerts = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulFeaturedConcerts (sort:{fields: createdAt}) {
      nodes {
        month
        name
        day
        slug
        image {
          file {
            url
          }
        }
        description {
          description
        }
      }
    }
  }
  `)
  
  const concerts = data.allContentfulFeaturedConcerts.nodes
  console.log(concerts)

  const featuredConcerts = concerts.map( (concert) => {
    const deatails = {
        name: concert.name,
        description: concert.description.description,
        month: concert.month,
        day: concert.day,
        slug: concert.slug,
        image: concert.image.file.url
    }
    return <div className="col-md-4" key={concert.slug}>
      <Link to={`/concerts/${concert.slug}`} className='concert-link'>
        <Concert concertDetails={deatails} />
      </Link>
    </div>
  })

  return (
    <div className="featured-concerts">
      <div className="container">
        <h4>Featured Concerts</h4>
        <br />
        <div className="row">
            {featuredConcerts}
        </div>
      </div>
    </div>
  )
}

export default FeaturedConcerts
