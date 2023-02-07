// import "./App.css";
import React from "react";
import Body from "./components/body";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container/style";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
