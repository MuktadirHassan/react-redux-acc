import image from "./img.jpg";
export const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="p-4 border rounded-lg">
      <div className="relative pb-60">
        <img
          src={image}
          className="absolute object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className="pt-3">
        <h4>Nikon 445D - Latest Edition</h4>
        <p className="text-lg font-semibold">356 $</p>
      </div>
    </div>
  );
};
