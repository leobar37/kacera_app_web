import React from "react";
import { Global, css } from "@emotion/react";
function GlobalStyle() {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "Artico expanded";
            font-weight: 400;
            src: url("/fonts/Artico-Expanded-Light.otf") format("opentype");
          }
          @font-face {
            font-family: "Artico expanded";
            font-weight: 600;
            src: url("/fonts/Artico-Expanded-Bold.otf") format("opentype");
          }
          @font-face {
            font-family: "Artico expanded";
            font-weight: 300;
            src: url("/fonts/Artico-Light.otf") format("opentype");
          }
          body {
            font-family: "Artico expanded", sans-serif;
          }
        `}
      />
    </>
  );
}

export default GlobalStyle;
