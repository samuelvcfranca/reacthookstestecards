import React from "react";
import { MainComponentContainer } from "./style";
import MainCard from "../Card";

export default function MainComponent() {
  return (
    <>
      <MainComponentContainer>
        <div>
          <h1>Teste, clique em adicionar personagem</h1>
          <p className="lead text-secondary">
            O teste deve funcionar da seguinte maneira, ao clicar em adicionar
            personagem, um modal aparece com um input e um botão submit, ao
            clicar enviar as informações da API devem aparecer na tela dentro do
            card. Após isso deve ser possivel favoritar um personagem e excluir.
          </p>
        </div>
        <MainCard />
      </MainComponentContainer>
    </>
  );
}
