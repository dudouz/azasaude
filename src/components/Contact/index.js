import React from "react"
import * as S from "./styles"

const Contact = () => {
  return (
    <S.Wrapper id="Contato">
      <S.Container>
        <S.Column>
          <S.Title>Entre em contato</S.Title>
          <S.Address>
            <h4>AZA Consultoria especializada em saúde</h4>

            <p>
              <strong>(47) 9 8837-6702</strong>
            </p>
            <p>
              Av. Josué di Bernardi, 185 - Sala 27 <br />
              Continente Business Office <br />
              Campinas - 88101-200 - São José - SC
            </p>
          </S.Address>
        </S.Column>
        <S.Column>
          <p>
            Para saber mais sobre nossos serviços e sanar outras dúvidas
            relacionadas a casos específicos e outras questões de atendimento,
            você pode utilizar o formulário a seguir para nos enviar uma
            mensagem. Responderemos o mais breve possível.
          </p>
          <S.Form action="">
            <label htmlFor="nome">
              <span>Seu nome</span>
              <input name="nome" type="text" />
            </label>
            <label htmlFor="email">
              <span>Seu e-mail</span>
              <input name="email" type="text" />
            </label>
            <label htmlFor="telefone">
              <span>Seu telefone / WhatAapp</span>
              <input name="telefone" type="text" />
            </label>
            <label htmlFor="cidade">
              <span>Sua Cidade</span>
              <input name="cidade" type="text" />
            </label>
            <label htmlFor="mensagem">
              <span>Qual a sua dúvida?</span>
              <textarea name="mensagem" rows="10"></textarea>
            </label>
            <button class="Button__primary">Enviar</button>
          </S.Form>
        </S.Column>
      </S.Container>
    </S.Wrapper>
  )
}

export default Contact
