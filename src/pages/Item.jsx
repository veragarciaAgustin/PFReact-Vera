import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { useProductById } from "../hooks";
export const Item = () => {
  const { id } = useParams();
  const { product, loading } = useProductById(id);

  return <ItemDetailContainer product={product} loading={loading} />;
};
