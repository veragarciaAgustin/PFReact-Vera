import { useState } from "react";
import { Button } from "@chakra-ui/react";
export const ItemCount = ({ stock = 5, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [contador, setContador] = useState(initial);

  const handleAdd = () => {
    setContador(contador + 1);
    onAdd(1);
  };
  return (
    <div>
      <div>
        <Button disabled={count <= 1} onClick={() => setCount(count - 1)}>
          -
        </Button>
        <span>{count}</span>
        <Button disabled={count >= stock} onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
      <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </div>
  );
};
