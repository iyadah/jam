import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MarkdownPreview } from "react-marked-markdown"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query GetContact {
      allStrapiContact(filter: {}, limit: 1) {
        edges {
          node {
            contactForm
            strapiId
          }
        }
      }
    }
  `)
  return (
    <div>
      hi
      <MarkdownPreview
        value={data.allStrapiContact.edges[0].node.contactForm}
      />
    </div>
  )
}

export default Contact
