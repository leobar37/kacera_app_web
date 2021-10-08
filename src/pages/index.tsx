import { BadgeCategorie } from "@app/components/categorie";
import { BaseLayout, RowContent } from "@app/components/layout";
import { Sidebar } from "@app/components/menu";
import { NavBarRoot } from "@app/components/navbar";
import { StoreBadge } from "@app/components/store";
import { HStack, VStack } from "@chakra-ui/layout";
import { CardProduct } from "@app/components/product";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BaseLayout nav={<NavBarRoot />} sidebar={<Sidebar />}>
      <RowContent title={"Tiendas cerca de mi"}>
        <HStack spacing={10}>
          <StoreBadge variant="selected" />
          <StoreBadge
            variant="selected"
            leftSide="https://bit.ly/dan-abramov"
          />
        </HStack>
      </RowContent>
      <RowContent title={"Categorias"}>
        <HStack>
          <BadgeCategorie status="selected">Frutas</BadgeCategorie>
          <BadgeCategorie status="normal">Verduras</BadgeCategorie>
          <BadgeCategorie status="normal">Nueces</BadgeCategorie>
        </HStack>
      </RowContent>
      <RowContent title="Ofertas del dìa">
        <HStack spacing={"20px"}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </HStack>
      </RowContent>
      <RowContent title="Lo más pedido">
        <HStack spacing={"20px"}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </HStack>
      </RowContent>
    </BaseLayout>
  );
};

export default Home;
