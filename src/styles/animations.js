import { keyframes, css } from "styled-components";

export const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`;
//animate svg attr colors from given array
export const getFadeFrames = (colors, attr = "stroke") => {
  let string = "";
  for (let i = 0; i < colors.length; i++) {
    const frame = `
    ${Math.floor((i / colors.length) * 100)}% {
      ${attr}:${colors[i]}
    }
    `;
    string += frame;
  }

  return keyframes`${string}`;
};

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
//path wave animation
export const wave = keyframes`
0% {
  d:path("
  M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 400 L 0 400 L 0 100 Z
  ");
}

50% {
  d:path("
  M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 400 L 0 400 L 0 100 Z
  ");
}
100% {
  d:path("
  M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 400 L 0 400 L 0 100 Z
  ");
}
`;

export const waveAnimation = (duration = "15s") => css`
  animation: ${wave} ${duration} linear infinite alternate;
`;

// ornament path animation

export const ornamentPath = (length, color) => keyframes`
0%{
  fill-opacity:0;
  stroke-opacity:1;
  fill:transparent;
  stroke-dashoffset:${length}
}
80% {
  stroke-opacity:1;
  fill-opacity:0.5;
  fill:${color};
  stroke-dashoffset:0
}
100%{
  stroke-opacity:1;
  fill-opacity:0.7;
  fill:${color};
  stroke-dashoffset:0;
}
`;
