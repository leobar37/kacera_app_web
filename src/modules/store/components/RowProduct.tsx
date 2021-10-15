import { CardProduct } from "@app/components/product";
import { RowContent } from "@app/components/layout";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { Product } from "@app/common/@types";
import { Swiper as _Swiper, SwiperSlide } from "swiper/react";
import { chakra } from "@chakra-ui/react";
const Swiper = chakra(_Swiper);

interface RowProductsProps {
  title: string;
  products: Product[] | undefined;
}
const productsMap = (product: Product, idx: number) => (
  <SwiperSlide>
    <CardProduct key={idx} product={product} />
  </SwiperSlide>
);

function RowProducts({ title, products }: RowProductsProps) {
  if (!products) {
    return <></>;
  }
  return (
    <RowContent title={title}>
      <Swiper margin="10px 5px" slidesPerView={6}>
        {products?.map(productsMap)}
      </Swiper>
    </RowContent>
  );
}

export default RowProducts;
