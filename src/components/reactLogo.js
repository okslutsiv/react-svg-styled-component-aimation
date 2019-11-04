import React from "react";
import styled from "styled-components";

import { ReactComponent as importedLogo } from "../svg/reactjs-icon.svg";
import { baseColors } from "../styles/palette";
import { getFadeFrames, rotate } from "../styles/animations";

const ReactLogo = () => {
  return <Logo />;
};

const fadeStr = getFadeFrames(baseColors);
const fadeFill = getFadeFrames(baseColors, "fill");

const Logo = styled(importedLogo)`
height:60vh;
  display: block;
  margin: auto;
  animation: ${rotate} 20s infinite linear;
  cursor: pointer;
  &:hover {
    animation-play-state: paused;
  }
  & .lines {
    stroke: ${baseColors[0]};
    animation: ${fadeStr} 10s linear infinite;
  }
  & .circle {
    fill: ${baseColors[0]};
    animation: ${fadeFill} 10s linear infinite;
  }
`;
export default ReactLogo;
