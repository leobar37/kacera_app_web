import * as React from "react";
import { chakra } from "@chakra-ui/react";

function _Ofert(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} {...props}>
      <path d="M5.333 6h32.793v32.793H5.333z" fill="none" />
      <path
        data-name="Trazado 5100"
        d="M32.745 19.721l.022-10.49-10.427-.087L7.522 23.721l10.405 10.58z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        data-name="Trazado 14298"
        d="M23.794 14.605a3.5 3.5 0 11-3.5 3.5 3.5 3.5 0 013.5-3.5z"
        fill="#fff"
      />
      <path data-name="Rect\xE1ngulo 1573" fill="none" d="M0 0h44v44H0z" />
    </svg>
  );
}

export default chakra(_Ofert);
