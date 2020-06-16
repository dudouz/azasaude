import React from "react"
import * as S from "./styles"

const Services = () => {
  return (
    <S.Wrapper id="Servicos">
      <S.Container>
        <S.Column>
          <S.Title>Nossos Serviços</S.Title>
        </S.Column>
        <S.Column>
          <p>
            Uma assessoria jurídica bem executada é crucial para o sucesso e
            segurança em contratos e operações. Na Aza Saúde oferecemos soluções
            específicas e desenvolvidas exatamente de acordo com a necessidade
            de nossos clientes. Acreditamos num atendimento personalizado e
            aprimoramento constante onde todos pontos de contato são monitorados
            para que possamos medir a eficácia e atingir da melhor forma nossos
            objetivos.
          </p>
        </S.Column>
      </S.Container>
      <S.Container>
        <S.ServicesRow>
          <S.Service>
            <h2>Setor Privado</h2>
            <p>
              Assessoria jurídica é uma atividade privativa do advogado e que
              tem como característica a atuação preventiva. O objetivo é buscar
              soluções com respaldo legal evitando o litígio para o cliente. É
              muito comum a contratação de advogados para prestarem assessoria
              jurídica para empresas
            </p>
          </S.Service>
          <S.Service>
            <h2>Setor Público</h2>
            <p>
              Assessoria jurídica é uma atividade privativa do advogado e que
              tem como característica a atuação preventiva. O objetivo é buscar
              soluções com respaldo legal evitando o litígio para o cliente. É
              muito comum a contratação de advogados para prestarem assessoria
              jurídica para empresas
            </p>
          </S.Service>
          <S.Service>
            <h2>Consultoria</h2>
            <p>
              Assessoria jurídica é uma atividade privativa do advogado e que
              tem como característica a atuação preventiva. O objetivo é buscar
              soluções com respaldo legal evitando o litígio para o cliente. É
              muito comum a contratação de advogados para prestarem assessoria
              jurídica para empresas
            </p>
          </S.Service>
        </S.ServicesRow>
      </S.Container>
      <S.Container>
        <S.CTARow>
          <a class="Button__primary" href="#">
            Entre em contato e solicite uma avaliação de seu caso.
          </a>
        </S.CTARow>
      </S.Container>
    </S.Wrapper>
  )
}

export default Services
