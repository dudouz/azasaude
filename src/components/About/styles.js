import styled from "styled-components"
export const Wrapper = styled.section`
  min-height: 100vh;
  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 0 1rem;
    margin: 10vh 0;
  }
`
export const Container = styled.div`
  color: var(--black);
  display: flex;
  width: 100%;
  max-width: 85vw;
  margin: 0 auto;

  p {
    line-height: 175%;
    font-size: 1.25rem;
  }
  &:last-child {
    margin-top: 15vh;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }
`
export const Title = styled.h1`
  margin-bottom: 1.25rem;
  color: var(--highlightDark);
  font-size: 3rem;
  font-weight: 900;
`

export const Column = styled.div`
  @media only screen and (min-width: 768px) {
    width: 35vw;
    &:not(:first-child) {
      width: 65vw;
    }
  }
`
export const VantagesRow = styled.div`
  margin-top: 3rem;
  display: flex;
  padding: 2rem 1rem;
  border: solid 1px var(--texts);
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Vantage = styled.div`
  padding: 0 2rem;
  h2 {
    font-size: 1.25rem;
    color: var(--highlightDark);
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
export const CTARow = styled.div`
  display: flex;
  text-align: center;
  align-self: center;
`
