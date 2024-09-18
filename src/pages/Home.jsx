import { useEffect, useState } from "react";
//Estas son importaciones estaticas, lo mejor seria hacerlas en barril o dinamicas
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemCount from "./components/ItemCount/ItemCount";
//De la siguiente manera
import { ItemListContainer} from "../components";
import { ChakraProvider, Flex, Spinner, Box, Menu } from "@chakra-ui/react";
//Importo el custom hook useProducts para poder usarlo en otras paginas
import { useProducts } from "../hooks";
//Importo el custom hook useProductsById para poder usarlo en otras paginas
import { useProductsById } from "../hooks";



export const Home = () => {
  //Aqui aplico el customHook, useProducts para realizar la logica de traida de productos
  //y poder usarlo en otras paginas de ser necesario
  //Traemos como OBJETO, la informacion que retornamos desde el customHook
  const { productsData, loading, error } = useProducts();

    return (
        <ChakraProvider>
        

        {/* Listado de items si no estamos cargando, si esta cargando se muestra spinner */}

        {loading ? (
          <Flex
            width={"100vw"}
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner size={"xl"} />
          </Flex>
        ) : (
          error ? (
            <Box>
              <p>Hay un error durante la carga de los productos.</p>
            </Box>
          ) :
          <ItemListContainer products={productsData} />
        )}
        </ChakraProvider>
    )
}