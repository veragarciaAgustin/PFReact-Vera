import { useEffect, useState } from "react";
import { getProductByCategory } from "../services/products";

export const useProductsByCategory = (category) => {
    const [productsData, setProductsData] = useState([]);

    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        getProductByCategory(category)
        .then((res) => {
            setProductsData(res.data.products);
        }).catch((err) => {
            console.log(err);
        })
        .finally(() => 
            {setLoading(false)}
    );

    }, [category]);

    return { productsData, loading };
};