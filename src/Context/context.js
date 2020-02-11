import React, { createContext, useState } from "react";

export const Context = createContext();

export default function CharProvider({ children }) {
  const [chars, setChars] = useState([]);

  // useEffect(async () => {
  //   const response = await fetch(`https://swapi.co/api/people/${1}/`);
  //   const data = await response.json();

  //   setChars(data);
  // });

  function saveChar(char) {
    const newChar = {
      id: Math.random(),
      name:
        char.name /* deve ser alterado para dataCharName.name, informação vinda da API do StarWars */
    };
    setChars([...chars, newChar]);
  }
  return (
    <>
      <Context.Provider value={{ chars, saveChar, setChars }}>
        {children}
      </Context.Provider>
    </>
  );
}
