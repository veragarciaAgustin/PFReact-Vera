import { ItemListContainer } from "../components";
import { ChakraProvider, Flex, Spinner, Box, Menu } from "@chakra-ui/react";
//Importo el custom hook useItems para poder usarlo en otras paginas
import { useItemsCollection } from "../hooks";

export const Home = () => {
  const { items, loading, error } = useItemsCollection("products");

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
      ) : error ? (
        <Box>
          <p>Hay un error durante la carga de los productos.</p>
        </Box>
      ) : (
        <ItemListContainer products={items} />
      )}
    </ChakraProvider>
  );
};
