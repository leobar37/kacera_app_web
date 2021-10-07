import * as React from "react";
import { chakra } from "@chakra-ui/react";

const typesBrands = {
  white: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30.768}
      height={30.983}
      {...props}
    >
      <path
        data-name="Trazado 5061"
        d="M15.953 12.145s-2.316-2.784-1.565-5.967 2.928-3.433 3.828-4.475a3.449 3.449 0 00.952-1.7s2.22 4.027.925 7.078c-1.049 2.466-2.926 3.054-4.14 5.064z"
        fill="#fff"
      />
      <path
        data-name="Trazado 5062"
        d="M18.248 16.64s2.338-2.765 5.6-2.58 3.889 2.286 5.074 2.992a3.437 3.437 0 001.841.642s-3.58 2.888-6.811 2.141c-2.604-.604-3.512-2.349-5.704-3.195z"
        fill="#fff"
      />
      <path
        data-name="Trazado 5063"
        d="M11.998 15.182s-1.128-3.439-4.224-4.493-4.466.658-5.827.868A3.431 3.431 0 010 11.462s2.234 4.018 5.508 4.541c2.648.42 4.143-.86 6.49-.821z"
        fill="#fff"
      />
      <path
        data-name="Trazado 5064"
        d="M14.338 18.922s2.243 2.84 1.416 6-3.014 3.36-3.941 4.38a3.436 3.436 0 00-.993 1.678s-2.121-4.084-.748-7.1c1.11-2.439 3.002-2.979 4.266-4.958z"
        fill="#fff"
      />
      <circle
        data-name="Elipse 260"
        cx={1.657}
        cy={1.657}
        r={1.657}
        transform="translate(13.525 14.052)"
        fill="#fff"
      />
    </svg>
  ),
  black: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path
            data-name="Rect\xE1ngulo 1567"
            fill="none"
            d="M0 0h64v64.388H0z"
          />
        </clipPath>
      </defs>
      <g data-name="logo kacera">
        <g
          data-name="Grupo 3557"
          transform="translate(16.031 16.774)"
          clipPath="url(#prefix__a)"
        >
          <path
            data-name="Trazado 14362"
            d="M33.109 25.156S28.3 19.422 29.78 12.763s6.1-7.214 7.954-9.249A7.214 7.214 0 0039.768 0s4.624 8.324 1.85 14.8-6.1 6.289-8.694 10.543"
          />
          <path
            data-name="Trazado 14363"
            d="M37.919 34.59s4.809-5.734 11.653-5.364 8.139 4.809 10.547 6.292a7.214 7.214 0 003.884 1.295s-7.4 5.919-14.058 4.439-7.4-4.809-11.838-6.659"
          />
          <path
            data-name="Trazado 14364"
            d="M24.971 31.63s-2.4-7.214-8.694-9.249-9.249 1.295-12.023 1.85A7.214 7.214 0 010 23.861s4.624 8.321 11.468 9.434 8.694-1.85 13.5-1.665"
          />
          <path
            data-name="Trazado 14365"
            d="M29.78 39.399s4.624 5.919 2.96 12.393-6.289 7.029-8.139 9.064a7.214 7.214 0 00-2.035 3.514s-4.439-8.509-1.48-14.8 6.289-6.1 8.879-10.358"
          />
          <path
            data-name="Trazado 14366"
            d="M34.96 33.295a3.514 3.514 0 11-2.59-4.069 3.514 3.514 0 012.59 4.069"
          />
        </g>
      </g>
      <path data-name="Rect\xE1ngulo 1572" fill="none" d="M0 0h96v96H0z" />
    </svg>
  ),
};

type Props = {
  mode?: keyof typeof typesBrands;
} & React.SVGProps<SVGSVGElement>;

function _Brand({ mode, ...props }: Props) {
  if (!mode) {
    mode = "black";
  }

  return typesBrands[mode](props);
}

export default chakra(_Brand);
