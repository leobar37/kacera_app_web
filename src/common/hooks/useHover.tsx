import { useRef, useState, useEffect, MutableRefObject, useMemo } from "react";
export const useHover = <T extends HTMLDivElement>(): [
  MutableRefObject<T>,
  boolean
] => {
  const [value, setValue] = useState<boolean>(false);
  const ref: any = useRef<T | null>(null);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);
  useEffect(
    () => {
      const node: T = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        node.addEventListener("mouseenter", handleMouseOver);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
      return () => {};
    },
    [] // Recall only if ref changes
  );
  const newValue = useMemo(() => value, [value]);
  return [ref, newValue];
};
