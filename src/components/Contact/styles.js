import styled from "styled-components"
export const Wrapper = styled.section`
  height: 100vh;
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
  justify-content: center;
  /* align-items: center; */

  p {
    line-height: 175%;
    font-size: 1.25rem;
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  &:last-child {
    margin-top: 15vh;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }
`
export const Title = styled.h1`
  color: var(--highlightDark);
  font-size: 3rem;
  font-weight: 900;
`

export const Column = styled.div`
  width: 35vw;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  &:not(:first-child) {
    width: 65vw;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`

export const Form = styled.form`
  p {
    margin-bottom: 1.75rem;
    font-size: 0.8rem;
    line-height: 200%;
  }
  padding: 2rem;
  border: solid 1px var(--texts);
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  button {
    border: 0;
    font-size: 1.25rem;
    text-transform: uppercase;
    width: 20vw;
    display: flex;

    justify-content: center;
    align-self: flex-end;
  }
  label {
    margin-bottom: 1rem;
    span {
      font-weight: 900;
    }
    /* padding-right: 30vw; */
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    margin-top: 1rem;
    min-height: 48px;
    border: solid 1px var(--texts);
    &:focus {
      outline: none;
      border: solid 1px var(--highlight);
    }
  }
`

export const Address = styled.address`
  h4 {
    font-weight: 900;
    color: var(--highlight);
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 200%;
  }
  margin-top: 2rem;
  max-width: 70%;
  width: 70%;
`
