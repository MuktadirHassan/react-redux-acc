export const ProductCard = ({
  product,
  onclick,
}: {
  product: IProduct;
  onclick: (id: string | undefined) => void;
}) => {
  return (
    <div
      className="p-3 rounded-sm shadow hover:shadow-xl hover:cursor-pointer"
      onClick={() => onclick(product._id)}
    >
      <div className="relative pb-60">
        <img
          src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
          className="absolute object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className="pt-3">
        <h4>{product.name}</h4>
        <p className="text-lg font-semibold">{product.price} $</p>
      </div>
    </div>
  );
};
