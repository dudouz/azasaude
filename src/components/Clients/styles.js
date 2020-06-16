import styled from "styled-components"
export const Wrapper = styled.section`
  padding: 10vh 0;
  height: 50vh;
  background: var(--texts);
`
export const Container = styled.div`
  color: var(--texts);
  display: flex;
  max-width: 85vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  p {
    line-height: 175%;
    font-size: 1.25rem;
  }
`
export const Title = styled.h1`
  color: var(--highlightDark);
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
`

export const Column = styled.div`
  width: 100vw;
`
export const ClientsRow = styled.div`
  display: flex;
  padding: 2rem 1rem;

  width: 100%;
  justify-content: space-between;
`

export const Client = styled.div`
  width: 120px;
  height: 120px;
  @media only screen and (max-width: 500px) {
    width: 64px;
    height: 64px;
  }
`
