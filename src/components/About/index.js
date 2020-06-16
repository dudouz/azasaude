import React from "react"
import * as S from "./styles"

const About = () => {
  return (
    <S.Wrapper id="Sobre">
      <S.Container>
        <S.Column>
          <S.Title>Sobre a Aza Saúde</S.Title>
        </S.Column>
        <S.Column>
          <p>
            A Aza Saúde é uma empresa de consultoria jurídica estabelecida no
            ano de 2019 em São José, Santa Catarina. Nossa especialidade é a
            área da saúde e prestamos serviços de consultoria, assessoria e
            gestão de questões legais, contratos e licitações para empresas do
            setor público e privado relacionadas ao setor médico-hospitalar.
          </p>
        </S.Column>
      </S.Container>
      <S.Container>
        <S.VantagesRow>
          <S.Vantage>
            <h2>Excelência</h2>
            <p>
              Assessoria jurídica é uma atividade privativa do advogado e que
              tem como característica a atuação preventiva. O objetivo é buscar
              soluções com respaldo legal evitando o litígio para o cliente. É
              muito comum a contratação de advogados para prestarem assessoria
              jurídica para empresas
            </p>
          </S.Vantage>
          <S.Vantage>
            <h2>Agilidade</h2>
            <p>
              Assessoria jurídica é uma atividade privativa do advogado e que
              tem como característica a atuação preventiva. O objetivo é buscar
              soluções com respaldo legal evitando o litígio para o cliente. É
              muito comum a contratação de advogados para prestarem assessoria
              jurídica para empresas
            </p>
          </S.Vantage>
          <S.Vantage>
            <h2>Compromisso</h2>
            <p>
              Assessoria jurídica é uma atividade privativa do advogado e que
              tem como característica a atuação preventiva. O objetivo é buscar
              soluções com respaldo legal evitando o litígio para o cliente. É
              muito comum a contratação de advogados para prestarem assessoria
              jurídica para empresas
            </p>
          </S.Vantage>
        </S.VantagesRow>
      </S.Container>
      <S.Container>
        <S.CTARow>
          <a class="Button__primary" href="#">
            Conheça nossos serviços
          </a>
        </S.CTARow>
      </S.Container>
    </S.Wrapper>
  )
}

export default About
