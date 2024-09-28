import { getAllProducts } from "../services/products";

import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export async function createProductsFirestore(collectionName) {
  try {
    //1. Obtener todos los productos de la API
    const response = await getAllProducts();
    const fetchedProducts = response.data.products;

    if (!Array.isArray(fetchedProducts)) {
      throw new Error("La respuesta no es un arreglo");
    }

    //2. Referencia a la coleccion de firestore
    const productsCollection = collection(db, collectionName);

    //3. Insertar los productos en la coleccion
    const addPromises = fetchedProducts.map((product) => {
      delete product.id;
      addDoc(productsCollection, { ...product, createdAt: new Date() });
    });

    await Promise.all(addPromises);

    console.log(
      `Se insertaron ${fetchedProducts.length} productos correctamente`
    );
  } catch (error) {
    console.error(error);
  }
}
