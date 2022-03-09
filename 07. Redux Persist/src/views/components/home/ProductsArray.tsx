import { useNavigate } from "react-router-dom";
import { ProductCard } from "../common/ProductCard";

export const ProductsArray = ({ products }: { products: IProduct[] }) => {
  let navigate = useNavigate();
  const onClick = (id: string | undefined): void => {
    navigate("/product/" + id);
  };

  return (
    <div className="grid grid-cols-2 gap-4 text-gray-800 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard product={product} onclick={onClick} />
      ))}
    </div>
  );
};
