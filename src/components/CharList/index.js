import React, { useContext } from "react";
import { Context } from "../../Context/context";
import CharItem from "../CharItem/index";

export default function CharList() {
  const context = useContext(Context);
  const data = context.chars.map(char => (
    <>
      <CharItem key={char.id} char={char} />
    </>
  ));
  return (
    <>
      <div>{data}</div>
    </>
  );
}
