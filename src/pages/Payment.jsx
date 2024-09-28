import { Flex, Input, Button } from "@chakra-ui/react";
import React from "react";
//FireBase
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Payment = () => {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const { cartState } = React.useContext(CartContext);

  const total = cartState.reduce(
    (acc, item) => acc + item.price * item.qtyItem,
    0
  );

  const handleCreateOrder = () => {
    const orderObj = {
      buyer: { name: name, lastName: lastName, email: email },
      items: cartState.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          qtyItem: item.qtyItem,
        };
      }),
      total: total,
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, orderObj).then(({ id }) => {
      MySwal.fire({
        title: "¡Orden creada!",
        html: `Tu orden con id <b>${id}</b> ha sido creada`,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    });
  };

  return (
    <Flex display={"block"}>
      <Input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Apellido"
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Correo electronico"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button colorScheme="teal" size={"lg"} onClick={handleCreateOrder}>
        Crear orden
      </Button>
    </Flex>
  );
};
