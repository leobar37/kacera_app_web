import * as React from "react";
import { matVa } from "@app/common/utils";

export type MotoProps = {
  status: "normal" | "active";
} & React.SVGProps<SVGSVGElement>;

const variants = {
  normal: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={88} height={52} {...props}>
      <path
        data-name="Trazado 4972"
        d="M78.731 37.78l.534 2.901 2.716 1.125-2.95.775-1.233 2.799-.636-3.141-2.698-1.126 2.904-.55z"
        fill="#fff"
      />
      <path
        data-name="Trazado 4994"
        d="M9.156 6.427l.514 2.792 2.613 1.085-2.838.743-1.187 2.693-.616-3.023-2.596-1.084 2.794-.53z"
        fill="#fff"
      />
      <path
        data-name="Trazado 5153"
        d="M72.417 4.097l1.446 7.87 7.365 3.058-7.998 2.095-3.343 7.588-1.723-8.519-7.317-3.051 7.875-1.495z"
        fill="#c7e959"
      />
      <g
        data-name="Grupo 4011"
        stroke="#1ac91e"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path
          data-name="L\xEDnea 337"
          fill="#fff"
          strokeMiterlimit={10}
          d="M27.369 48.033l43.17-9.967"
        />
        <path
          data-name="Trazado 14292"
          d="M57.557 28.725a3.9 3.9 0 014.714 2.943 4 4 0 01-2.978 4.764 3.9 3.9 0 01-4.71-2.947 4 4 0 012.974-4.76z"
          fill="none"
        />
        <path
          data-name="Trazado 14293"
          d="M33.503 34.413a3.9 3.9 0 014.714 2.943 4 4 0 01-2.978 4.764 3.9 3.9 0 01-4.71-2.947 4 4 0 012.974-4.76z"
          fill="none"
        />
        <path
          data-name="Trazado 15012"
          d="M38.415 37.315l14.922-3.463"
          fill="none"
        />
        <path
          data-name="Trazado 14280"
          d="M50.002 34.549L44.829 11.58l-24.93 5.894 1.391 6.18"
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        />
        <path
          data-name="L\xEDnea 340"
          fill="none"
          strokeMiterlimit={10}
          d="M12.701 26.401l12.99-2.999"
        />
        <path
          data-name="L\xEDnea 341"
          fill="none"
          strokeMiterlimit={10}
          d="M11.501 33.638l8.51-1.965"
        />
        <path
          data-name="Trazado 14281"
          d="M30.168 39.2l-3.31.825-1.604-7.122"
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        />
        <path
          data-name="Trazado 14282"
          d="M48.093 17.436l5.081-1.201c1.464-.347 2.725-.376 3.954 1.215 0 0 3.747 4.757 4.637 4.547l1.232-.292a.813.813 0 01.981.615l1.91 8.48-3.652.863"
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        />
      </g>
      <path fill="none" d="M0 0h88v52H0z" />
    </svg>
  ),
  active: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={88} height={52} {...props}>
      <path
        data-name="Trazado 4972"
        d="M78.731 37.78l.534 2.901 2.716 1.125-2.95.775-1.233 2.799-.636-3.141-2.698-1.126 2.904-.55z"
        fill="#c7e959"
      />
      <path
        data-name="Trazado 4994"
        d="M9.156 6.427l.514 2.792 2.613 1.085-2.838.743-1.187 2.693-.616-3.023-2.596-1.084 2.794-.53z"
        fill="#c7e959"
      />
      <path
        data-name="Trazado 5153"
        d="M72.417 4.097l1.446 7.87 7.365 3.058-7.998 2.095-3.343 7.588-1.723-8.519-7.317-3.051 7.875-1.495z"
        fill="#c7e959"
      />
      <path
        data-name="L\xEDnea 337"
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M27.369 48.033l43.17-9.967"
      />
      <path
        data-name="Trazado 14292"
        d="M57.557 28.725a3.9 3.9 0 014.714 2.943 4 4 0 01-2.978 4.764 3.9 3.9 0 01-4.71-2.947 4 4 0 012.974-4.76z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2}
      />
      <path
        data-name="Trazado 14293"
        d="M33.503 34.413a3.9 3.9 0 014.714 2.943 4 4 0 01-2.978 4.764 3.9 3.9 0 01-4.71-2.947 4 4 0 012.974-4.76z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2}
      />
      <path
        data-name="Trazado 15012"
        d="M38.415 37.315l14.922-3.463"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2}
      />
      <path
        data-name="Trazado 14280"
        d="M50.002 34.549L44.829 11.58l-24.93 5.894 1.391 6.18"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        data-name="L\xEDnea 340"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M12.701 26.401l12.99-2.999"
      />
      <path
        data-name="L\xEDnea 341"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M11.501 33.638l8.51-1.965"
      />
      <path
        data-name="Trazado 14281"
        d="M30.168 39.2l-3.31.825-1.604-7.122"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        data-name="Trazado 14282"
        d="M48.093 17.436l5.081-1.201c1.464-.347 2.725-.376 3.954 1.215 0 0 3.747 4.757 4.637 4.547l1.232-.292a.813.813 0 01.981.615l1.91 8.48-3.652.863"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path fill="none" d="M0 0h88v52H0z" />
    </svg>
  ),
};
export function Delivery({ status, ...props }: MotoProps) {
  const matchMode = matVa(status);
  return matchMode({
    active: variants.active(props),
    normal: variants.normal(props),
  });
}
