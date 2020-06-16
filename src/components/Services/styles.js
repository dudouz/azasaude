import styled from "styled-components"
export const Wrapper = styled.section`
  padding: 10vh 0;
  height: 100vh;
  background: var(--highlightDark);
  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 10vh 1rem;
  }
`
export const Container = styled.div`
  color: var(--texts);
  display: flex;
  width: 100%;
  max-width: 85vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  p {
    line-height: 175%;
    font-size: 1.25rem;
  }
  &:last-child {
    margin-top: 15vh;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    p {
      line-height: 175%;
      font-size: 1rem;
    }
  }
`
export const Title = styled.h1`
  color: var(--highlight);
  font-size: 3rem;
  font-weight: 900;
  @media only screen and (max-width: 768px) {
    margin-bottom: 1.25rem;
  }
`

export const Column = styled.div`
  width: 35vw;
  &:not(:first-child) {
    width: 65vw;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
export const ServicesRow = styled.div`
  margin-top: 3rem;
  display: flex;
  padding: 2rem 1rem;
  border: solid 1px var(--texts);
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Service = styled.div`
  padding: 0 2rem;
  h2 {
    font-size: 1.25rem;
    color: var(--highlight);
    font-weight: 900;
    margin-bottom: 0.75rem;
    &:after {
      content: "";
      display: block;
      height: 3px;
      width: 10vw;
      background: var(--texts);
    }
  }
  p {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`
export const CTARow = styled.div``
