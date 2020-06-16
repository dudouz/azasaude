import styled from "styled-components"

export const Nav = styled.nav`
  ul {
    display: flex;
    width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
    li {
      &:not(:first-child) {
        margin-left: 2rem;
      }
      a {
        font-family: "Montserrat";
        letter-spacing: 0.15rem;
        color: var(--highlight);
        font-size: 1rem;
        text-decoration: none;
        font-weight: 200;
        text-transform: uppercase;
        transition: all ease-in-out 0.3s;
        &:hover {
          color: var(--highlightDark);
        }
        @media only screen and (max-width: 560px) {
          font-size: 0.5rem;
          letter-spacing: unset;
          margin
        }
      }
    }
  }
`
