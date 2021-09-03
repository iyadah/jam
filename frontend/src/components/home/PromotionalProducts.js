import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
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
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      Promo Products {data.allStrapiProduct.edges.map(edge => edge.node.name)}
    </div>
  )
}

export default PromotionalProducts
