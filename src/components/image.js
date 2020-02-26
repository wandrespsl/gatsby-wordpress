import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(edge => {
        return edge.node.fluid.originalName === name
      })
      if (!image) {
        return null
      }

      return (
        <Img alt={image.node.fluid.originalName} fluid={image.node.fluid} />
      )
    }}
  />
)

export default Image
