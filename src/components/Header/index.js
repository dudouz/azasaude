import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import PropTypes from "prop-types"
import React from "react"

import Navigation from "../Navigation"
import * as S from "./styles"

const Header = ({ siteTitle }) => {
  const logo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-aza-png-ok.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <S.Header>
        <S.LogoWrapper>
          <Img
            fluid={logo.placeholderImage.childImageSharp.fluid}
            alt={siteTitle}
          />
        </S.LogoWrapper>
        <Navigation />
      </S.Header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
