import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../../Context/context";
import { GoCheck } from "react-icons/go";

export default function CharItem({ char }) {
  const context = useContext(Context);

  function handleFavorite(id) {
    const newChars = context.chars.map(chars => {
      return chars.id === id ? { ...chars, favorite: !char.favorite } : chars;
    });
    context.setChars(newChars);
  }

  function handleExclude(id) {
    const newChars = context.chars.map(chars => {
      return { ...chars };
    });
    console.log(`o id excluido é ${id}`);
    newChars.splice(id - 1, 1);
    console.log(newChars);
    console.log(newChars.length);
    context.setChars(newChars);
  }

  return (
    <>
      <div className="char mb-1 d-flex">
        <Button
          onClick={() => handleFavorite(char.id)}
          className="mr-auto"
          size="sm"
          variant="info"
        >
          Favoritar
        </Button>{" "}
        {char.favorite && <GoCheck style={{ height: "25px" }} />} {char.name}{" "}
        <Button
          onClick={() => handleExclude(char.id)}
          className="ml-auto"
          size="sm"
          variant="danger"
        >
          Excluir
        </Button>
      </div>
    </>
  );
}
