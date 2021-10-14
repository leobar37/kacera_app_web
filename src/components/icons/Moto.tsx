import * as React from "react";
import { matVa } from "@app/common/utils";
export type MotoProps = {
  status: "normal" | "active";
} & React.SVGProps<SVGSVGElement>;

const variants = {
  normal: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={88} height={52} {...props}>
      <path fill="none" d="M0 0h88v52H0z" />
      <path
        d="M71.35 41.205l.435 2.95 2.704 1.24-3.006.672-1.345 2.784-.53-3.196-2.686-1.233 2.953-.453zM12.827 31.173l.506 3.422 3.136 1.432-3.487.784-1.56 3.235-.615-3.712-3.115-1.429 3.424-.527z"
        fill="#fff"
      />
      <path
        data-name="estrella especial"
        d="M71.055 2.93l.993 6.721 6.16 2.814-6.85 1.54-3.062 6.34-1.21-7.28-6.118-2.806 6.727-1.035z"
        fill="#c7e959"
      />
      <g
        data-name="Grupo 3995"
        transform="rotate(-11 77.79 -30.045)"
        fill="none"
        stroke="#1ac91e"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <circle
          data-name="Elipse 542"
          cx={5.171}
          cy={5.171}
          r={5.171}
          transform="translate(18.696 23.893)"
          strokeLinejoin="round"
        />
        <circle
          data-name="Elipse 544"
          cx={5.171}
          cy={5.171}
          r={5.171}
          transform="translate(47.896 22.926)"
          strokeLinejoin="round"
        />
        <path
          data-name="Trazado 14283"
          d="M10.406 5.121V2.068A2.088 2.088 0 0112.514 0h10.378a2.019 2.019 0 012.038 2v10.784a1.758 1.758 0 01-1.775 1.741H11.958A1.537 1.537 0 0110.406 13v-.154"
          strokeLinejoin="round"
        />
        <path
          data-name="Trazado 14284"
          d="M5.281 6.589c.386-.051 7.013 0 7.013 0"
        />
        <path
          data-name="Trazado 14286"
          d="M0 10.409c.386-.051 7.013 0 7.013 0"
        />
        <path
          data-name="Trazado 14287"
          d="M37.936 7.88h3.156a2.594 2.594 0 012.312 1.417l7.245 14.231"
          strokeLinejoin="round"
        />
        <rect
          data-name="Rect\xE1ngulo 1519"
          width={11.487}
          height={4.651}
          rx={2.326}
          transform="translate(24.931 12.484)"
          strokeLinejoin="round"
        />
        <path
          data-name="Trazado 14288"
          d="M16.824 23.529h16.387c.559 0 .946-.436.757-.851a9.343 9.343 0 00-8.935-5.543c-6.124 0-8.314 3.815-8.993 5.551-.164.419.228.843.784.843z"
          strokeLinejoin="round"
        />
        <path data-name="L\xEDnea 343" d="M29.96 29.497l17.751-.654" />
        <path
          data-name="Trazado 14289"
          d="M33.211 23.628h9.012a1.155 1.155 0 001.243-1.039v-6.078a1.284 1.284 0 011.383-1.156h1.489"
          strokeLinejoin="round"
        />
        <path
          data-name="Trazado 14290"
          d="M44.293 11.042L45.381 9.7a3.189 3.189 0 012.476-1.18h0a2.088 2.088 0 012.088 2.088v1.446a2.019 2.019 0 01-2.019 2.019h-2.09"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
  active: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={88} height={52} {...props}>
      <path fill="none" d="M0 0h88v52H0z" />
      <path
        d="M71.35 41.205l.435 2.95 2.704 1.24-3.006.672-1.345 2.784-.53-3.196-2.686-1.233 2.953-.453zM12.827 31.173l.506 3.422 3.136 1.432-3.487.784-1.56 3.235-.615-3.712-3.115-1.429 3.424-.527z"
        fill="#c7e959"
      />
      <path
        data-name="estrella especial"
        d="M71.055 2.93l.993 6.721 6.16 2.814-6.85 1.54-3.062 6.34-1.21-7.28-6.118-2.806 6.727-1.035z"
        fill="#c7e959"
      />
      <g
        data-name="Grupo 3995"
        transform="rotate(-11 77.79 -30.045)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <circle
          data-name="Elipse 542"
          cx={5.171}
          cy={5.171}
          r={5.171}
          transform="translate(18.696 23.893)"
          strokeLinejoin="round"
        />
        <circle
          data-name="Elipse 544"
          cx={5.171}
          cy={5.171}
          r={5.171}
          transform="translate(47.896 22.926)"
          strokeLinejoin="round"
        />
        <path
          data-name="Trazado 14283"
          d="M10.406 5.121V2.068A2.088 2.088 0 0112.514 0h10.378a2.019 2.019 0 012.038 2v10.784a1.758 1.758 0 01-1.775 1.741H11.958A1.537 1.537 0 0110.406 13v-.154"
          strokeLinejoin="round"
        />
        <path
          data-name="Trazado 14284"
          d="M5.281 6.589c.386-.051 7.013 0 7.013 0"
        />
        <path
          data-name="Trazado 14286"
          d="M0 10.409c.386-.051 7.013 0 7.013 0"
        />
        <path
          data-name="Trazado 14287"
          d="M37.936 7.88h3.156a2.594 2.594 0 012.312 1.417l7.245 14.231"
          strokeLinejoin="round"
        />
        <rect
          data-name="Rect\xE1ngulo 1519"
          width={11.487}
          height={4.651}
          rx={2.326}
          transform="translate(24.931 12.484)"
          strokeLinejoin="round"
        />
        <path
          data-name="Trazado 14288"
          d="M16.824 23.529h16.387c.559 0 .946-.436.757-.851a9.343 9.343 0 00-8.935-5.543c-6.124 0-8.314 3.815-8.993 5.551-.164.419.228.843.784.843z"
          strokeLinejoin="round"
        />
        <path data-name="L\xEDnea 343" d="M29.96 29.497l17.751-.654" />
        <path
          data-name="Trazado 14289"
          d="M33.211 23.628h9.012a1.155 1.155 0 001.243-1.039v-6.078a1.284 1.284 0 011.383-1.156h1.489"
          strokeLinejoin="round"
        />
        <path
          data-name="Trazado 14290"
          d="M44.293 11.042L45.381 9.7a3.189 3.189 0 012.476-1.18h0a2.088 2.088 0 012.088 2.088v1.446a2.019 2.019 0 01-2.019 2.019h-2.09"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
};

export function Moto({ status, ...props }: MotoProps) {
  const matchMode = matVa(status);
  return matchMode({
    active: variants.active(props),
    normal: variants.normal(props),
  });
}
