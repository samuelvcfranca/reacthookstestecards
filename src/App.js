import React from "react";
import history from "./services/history";
import GlobalStyle from "./Styles/global";
import { Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Routes from "./routes";
import CharProvider from "./Context/context";

function App() {
  return (
    <>
      <CharProvider>
        <Router history={history}>
          <Container>
            <Routes />
            <GlobalStyle />
          </Container>
        </Router>
      </CharProvider>
    </>
  );
}

export default App;
