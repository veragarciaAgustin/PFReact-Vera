import { useState } from "react";
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
                <button disabled={count <= 1} onClick={() => setCount(count - 1)}>-</button>
                <span>{count}</span>
                <button disabled={count >= stock} onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}