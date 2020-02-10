import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../../Context/context";

export default function FormModal(props) {
  const { saveChar } = useContext(Context);
  const [char, setChar] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    e.preventDefault();
    saveChar(char);
  }

  function handleInputChange(e) {
    setChar({
      ...char,
      name: e.target.value
    });
  }

  return (
    <>
      <Link
        onClick={handleShow}
        style={{
          textDecoration: "none"
        }}
      >
        {props.linkName}
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Form className="testInput" onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Adicionando Novo Personagem</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Número do Personagem</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Digite aqui um número"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Form.Group>
              <Button variant="success" type="submit" onClick={handleClose}>
                Enviar
              </Button>
            </Form.Group>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
