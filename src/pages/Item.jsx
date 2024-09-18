import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { useProductsById } from "../hooks";
import { Flex, Spinner } from "@chakra-ui/react";
export const Item = () => {

    //useParams es un hook de react que nos permite obtener los datos de la url
    const { id } = useParams();
    const { productData, loading } = useProductsById(id);

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
        <ItemDetailContainer product={productData} />
      )
      
}