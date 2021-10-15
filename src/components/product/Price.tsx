import React from "react";

interface PriceProps {
  value: number;
}
export const Price = ({ value }: PriceProps) => {
  return <>{value} s/.</>;
};
