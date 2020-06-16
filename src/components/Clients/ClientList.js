import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as S from "./styles"

const ClientList = () => {
  const clientList = useStaticQuery(graphql`
    query ClientsImages {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "clients" }
        }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(maxHeight: 128) {
                src
                srcSet
                base64
                aspectRatio
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {clientList.allFile.edges.map(({ node }) => (
        <S.Client>
          <Img fluid={node.childImageSharp.fluid} />
        </S.Client>
      ))}
    </>
  )
}

export default ClientList
