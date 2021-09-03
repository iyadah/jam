import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { Button, IconButton } from "@material-ui/core"
import Carousel from "react-spring-3d-carousel"
import clsx from "clsx"

const PromotionalProducts = () => {
  const data = useStaticQuery(graphql`
    query promoproducts {
      allStrapiProduct(filter: { promo: { eq: true } }) {
        edges {
          node {
            name
            description
            strapiId
            variants {
              images {
                url
                name
              }
              color
            }
          }
        }
      }
    }
  `)
  var slides = []
  data.allStrapiProduct.edges.map(edge =>
    slides.push({
      key: edge.node.strapiId,
      content: (
        <Grid container direct="column">
          <Grid item>
            <IconButton>
              <img
                src={
                  "http://localhost:1337" + edge.node.variants[0].images[0].url
                }
              />
            </IconButton>
          </Grid>
        </Grid>
      ),
    })
  )
  return (
    <div>
      <Carousel slides={slides} goToSlide={0} />
    </div>
  )
}

export default PromotionalProducts
