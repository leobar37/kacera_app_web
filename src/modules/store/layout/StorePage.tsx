import { BadgeCategorie } from "@app/components/categorie";
import { BaseLayout, RowContent } from "@app/components/layout";
import { Sidebar } from "@app/components/menu";
import { NavBarRoot } from "@app/components/navbar";
import { StoreBadge } from "@app/components/store";
import { HStack } from "@chakra-ui/layout";
import { useHomeProducts, useCategories } from "@app/modules/store/controller";
import type { NextPage } from "next";
import { RowProduct, RowCategorie } from "../components";
const Home: NextPage = () => {
  const { data: homeProducts } = useHomeProducts();
  const { categories } = useCategories();
  console.log(categories);

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
      <RowCategorie categories={categories} />
      <RowProduct
        title={"Cerca de mi"}
        products={homeProducts?.AHomeCercademi}
      />
      <RowProduct
        title={"Lo más pedido"}
        products={homeProducts?.AHomeMaspedidos}
      />
      <RowProduct
        title={"Nuevos productos"}
        products={homeProducts?.AHomeNuevosproductos}
      />
      <RowProduct title={"Ofertas"} products={homeProducts?.AHomeOfertas} />
    </BaseLayout>
  );
};

export default Home;
