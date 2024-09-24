import { Image, HStack, Button, Badge } from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
//IMPORTAR EL USE CONTEXT
import { useContext } from "react";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  //importando el contexto
  const { cartState } = useContext(CartContext);

  const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

  return (
    <HStack>
      <Button>
        <Link to="/checkout" style={{ display: "flex", alignItems: "center" }}>
        <Badge mr={2} fontSize="md" colorScheme="green">
          {qtyTotalItems}
        </Badge>
        <Image src="../../shopping-cart-line.svg" width={30} />
        </Link>
      </Button>
    </HStack>
  );
};
