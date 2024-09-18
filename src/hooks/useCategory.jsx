import { useEffect, useState } from "react";
import { getCategories } from "../services/products";

export const useCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { category };
};