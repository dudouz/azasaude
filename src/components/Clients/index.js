import React from "react"
import * as S from "./styles"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import ClientList from "./ClientList"
const imgGridStyle = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, 200px)`,
}

const Clients = () => {
  return (
    <S.Wrapper id="Clientes">
      <S.Container>
        <S.Column>
          <S.Title>Clientes que confiam em nosso trabalho</S.Title>
        </S.Column>
      </S.Container>
      <S.Container>
        <S.ClientsRow>
          <ClientList />
        </S.ClientsRow>
      </S.Container>
    </S.Wrapper>
  )
}

export default Clients
