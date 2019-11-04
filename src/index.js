import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Footer from "./components/footer";
import ReactLogo from "./components/reactLogo";

function App() {
  return (
    <Main>
      <h1>Hello CodeSandbox</h1>
      <ReactLogo />
      <Footer />
    </Main>
  );
}
const Main = styled.div`
  font-family: sans-serif;
  color: #293d7c;
  display: flex table-column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
