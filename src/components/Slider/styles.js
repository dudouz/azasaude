import styled from "styled-components"

export const Slider = styled.div`
  position: relative;
  height: 100vh;
  .gatsby-image-wrapper {
    width: 100vw;
    img {
      height: auto;
      width: 100vw;
    }
  }
  @media only screen and (max-width: 960px) {
    .gatsby-image-wrapper {
      height: 100vh;
      img {
        width: auto;
        height: 100vh;
      }
    }
  }
`

export const SliderContent = styled.div`
  top: 15vh;
  left: 6vw;
  position: absolute;
`
export const SliderTitle = styled.h1`
  line-height: 150%;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
  font-weight: 300;
  font-size: 4rem;
  max-width: 50vw;
  color: var(--texts);
  span {
    font-weight: 900;
  }
  @media only screen and (max-width: 960px) {
    max-width: 100%;
    font-size: 3rem;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 2.5rem;
  }
`
export const SliderButton = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
  max-width: 20vw;
  position: absolute;
  left: 0;
  a {
    &:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    align-self: center;
    position: relative;
  }
`

export const Button__primary = styled.a`
  font-family: "Montserrat";
  text-decoration: none;
  display: inline-block;
  background: var(--highlight);
  padding: 1rem;
  border-radius: 0.25rem;
  color: var(--highlightDark);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  transition: all ease-in 0.2s;
  &:hover {
    background: var(--highlightDark);
    color: var(--texts);
  }
`

export const Button__secondary = styled.a`
  text-decoration: none;
  display: inline-block;
  color: var(--highlight);
  font-size: 0.75rem;
  transition: all ease-in 0.2s;
  &:hover {
    color: var(--texts);
  }
`
