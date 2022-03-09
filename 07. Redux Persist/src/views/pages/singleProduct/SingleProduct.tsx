import useAPI from "hooks/useAPI";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add_to_cart } from "redux/actions/cartAction";
import ProductService from "services/Product.service";

export const SingleProduct = () => {
  const { id = "" } = useParams();

  const { data: product } = useAPI<IProduct>(() =>
    ProductService.getProductDetailsById(id)
  );

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-2 gap-4">
      {product ? (
        <img
          src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
          alt=""
        />
      ) : null}
      <div>
        <div>
          <h1 className="text-xl">{product?.name}</h1>
          <p className="mt-3 text-gray-500">{product?.description}</p>
          <h1 className="my-4 text-2xl">{product?.price} $</h1>
        </div>
        <button
          className="p-2 border"
          onClick={() => dispatch(add_to_cart(product as IProduct))} // dispatch -> action
        >
          Add To cart
        </button>
      </div>
      {/* <button
        className="p-2 border"
        onClick={() => dispatch(remove_from_cart(id))}
      >
        Remove From cart
      </button> */}
    </div>
  );
};
