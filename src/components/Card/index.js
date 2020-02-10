import React from "react";
import { CardContainer } from "./style";
import { Card } from "react-bootstrap";
import FormModal from "../FormModal";
import CharList from "../CharList/index";

export default function MainCard() {
  return (
    <>
      <CardContainer>
        <Card block>
          <Card.Body>
            <Card.Title className="mb-3">Informações do Personagem</Card.Title>
            <Card.Text>
              <CharList />
            </Card.Text>
            <FormModal linkName="+ Adicionar novo personagem" />
          </Card.Body>
        </Card>
      </CardContainer>
    </>
  );
}
