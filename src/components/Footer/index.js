import React from "react"
import * as S from "./styles"

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Column>
          <S.Title>
            Copyright &copy; Aza Saúde - Desenvolvimento:{" "}
            <a href="https://ddz.digital" target="_blank">
              ddz.digital
            </a>
          </S.Title>
        </S.Column>
      </S.Container>
    </S.Wrapper>
  )
}

export default Footer
