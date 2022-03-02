import { ProductCard } from "../common/ProductCard";

export const ProductsArray = ({
  products = [1, 2, 3, 4, 5],
}: {
  products: any[];
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 text-gray-800 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
