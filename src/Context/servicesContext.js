import React, { createContext, useState } from "react";

export const apiServiceContext = createContext();

export default function StarWarsContext({ children }) {
  const [charData, setCharData] = useState([]);

  useEffect(async () => {
    const response = await fetch(`https://swapi.co/api/people/${1}/`);
    const data = await response.json();

    setChardata(data.name);
  });

  return (
    <>
      <StarWarsContext.Provider value={{ charData, setCharData }}>
        {children}
      </StarWarsContext.Provider>
    </>
  );
}
