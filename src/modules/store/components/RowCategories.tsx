import { BadgeCategorie } from "@app/components/categorie";
import { RowContent } from "@app/components/layout";
import { HStack } from "@chakra-ui/layout";
import { Categorie } from "@app/common/@types";
import React from "react";

type CategoriesRowProps = {
  categories: Categorie[] | undefined;
};

const mapCategorie = (categorie: Categorie, idx: number) => {
  return <BadgeCategorie status="normal" categorie={categorie} />;
};
function CategoriesRow({ categories }: CategoriesRowProps) {
  if (!categories) {
    return <></>;
  }

  return (
    <RowContent title={"Categorias"}>
      <HStack>{categories.map(mapCategorie)}</HStack>
    </RowContent>
  );
}

export default CategoriesRow;
