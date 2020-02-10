import React from "react";
import { Switch, Route } from "react-router-dom";

//Importar a Página
import MainPage from "../Pages/MainPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  );
}
