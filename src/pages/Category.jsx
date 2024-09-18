import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";
export const Category = () => {
    const { category } = useParams();
    const { productsData, loading } = useProductsByCategory(category);


    return loading ? (
        <Flex
          width={"100vw"}
          height={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner size={"xl"} />
        </Flex>
      ) : (
        <ItemListContainer products={productsData} />
      )
}


