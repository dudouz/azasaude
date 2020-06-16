import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as S from "./styles"

const Navigation = () => {
  return (
    <S.Nav>
      <ul>
        <li>
          <AnchorLink to="/#Home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#Sobre">Sobre</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#Servicos">Serviços</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#Clientes">Clientes</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#Contato">Contato</AnchorLink>
        </li>
      </ul>
    </S.Nav>
  )
}

export default Navigation
