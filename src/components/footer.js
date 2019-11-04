import React from "react";
import styled from "styled-components";
import { ReactComponent as importedWave } from "../svg/wave.svg";
import { waveAnimation } from "../styles/animations";
const Footer = () => {
  return (
    <>
      <FooterDiv>
        <Wave />
        <p>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </FooterDiv>
    </>
  );
};
const Wave = styled(importedWave)`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  fill: #293d7c;
  & path {
    ${waveAnimation("15s")}
  }
`;
const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  font-size: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  & a {
    color: currentColor;
    text-decoration: none;
    display: inline-block;
    margin: 0 5px;
  }
`;

export default Footer;
