import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products";

export const useProducts = () => {
  //UseState que almacena el array de productos que traemos
  const [productsData, setProductsData] = useState([]);

  //UseState para el estado loading
  const [loading, setLoading] = useState(true);

  //Error
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        if (res.status === 200) {
          //Actualizamos ese estado con la informacion de la API
          setProductsData(res.data.products);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        //Quiero que cuando finalice mi promesa, la aplicacion deje de mostrar el icono de cargar
        setLoading(false);
      });
  }, []);
  //Retornamos el array de productos y el estado loading los cuales son 
  //considerados los elementos necesarios a exportar para trabajar desde otra pagina
  //Se retorna como un objeto para facilitar la desestructuracion
  return { productsData, loading, error };
};
