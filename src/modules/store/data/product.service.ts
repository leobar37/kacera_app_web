import { clientApi } from "@app/lib";
import { HomeAll, Categorie } from "@app/common/@types";
import { get } from "lodash";

export const retrieveHome = async (categorieId = -1) => {
  const { data } = await clientApi.get<HomeAll>(
    `ClienteApp/Home?idcliente=11&phone=e097ad2611723b52&idcategoria=${categorieId}`
  );
  return data;
};

export const getCategories = async (): Promise<Categorie[]> => {
  const { data } = await clientApi.get(
    "https://api.kacera.pe/api/ClienteApp/Tiendascategorias?idtienda=26&idsucursal=30&phone=asd"
  );
  console.log("resp");
  console.log(data);
  return get(data, "ATiendaCategoria");
};

// https://api.kacera.pe/api/ClienteApp/Tiendascategorias?idtienda=26&idsucursal=30&phone=asd
