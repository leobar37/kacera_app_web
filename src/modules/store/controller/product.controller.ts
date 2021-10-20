import { retrieveHome, getCategories } from "../data";
import { useQuery } from "react-query";
import { Categorie } from "@app/common/@types";

export const useHomeProducts = () => {
  return useQuery(["homequery"], () => retrieveHome());
};
export const useCategories = () => {
  const { data: categories, ...ext } = useQuery<Categorie[]>(
    ["categorie"],
    () => getCategories()
  );
  return { categories, ...ext };
};
