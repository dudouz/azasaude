import React from "react"
import * as S from "./styles"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = () => {
  const slide = useStaticQuery(graphql`
    query {
      sliderImage: file(relativePath: { eq: "slider/slide-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <S.Slider>
      <Img
        fluid={slide.sliderImage.childImageSharp.fluid}
        imgStyle={{ objectFit: "cover" }}
      />
      <S.SliderContent>
        <S.SliderTitle>
          Consultoria jurídica especializada em <span>saúde</span>.
        </S.SliderTitle>
        <S.SliderButton>
          <S.Button__primary href="#" className="SliderButton__primary">
            Conheça a AZA Saúde
          </S.Button__primary>
          <S.Button__secondary href="#" className="SliderButton__secondary">
            ou entre em contato
          </S.Button__secondary>
        </S.SliderButton>
      </S.SliderContent>
    </S.Slider>
  )
}

export default Slider
