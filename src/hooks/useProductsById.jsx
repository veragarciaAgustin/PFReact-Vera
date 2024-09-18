import { useEffect, useState } from "react";
import { getProductById } from "../services/products";

export const useProductsById = (id) => {
    const [productData, setProductData] = useState([]);

    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        getProductById(id)
        .then((res) => {
            setProductData(res.data);
        }).catch((err) => {
            console.log(err);
        })
        .finally(() => 
            {setLoading(false)}
    );

    }, [id])

    return { productData, loading };
};