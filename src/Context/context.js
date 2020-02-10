import React, { createContext, useState } from "react";

export const Context = createContext();

export default function CharProvider({ children }) {
  const [chars, setChars] = useState([]);

  // useEffect(async () => {
  //   const response = await fetch(`https://swapi.co/api/people/${1}/`);
  //   const data = await response.json();

  //   setChars(data);
  // }, []);
  function saveChar(char) {
    const newChar = {
      id: chars.length + 1,
      name: char.name,
      done: undefined
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
