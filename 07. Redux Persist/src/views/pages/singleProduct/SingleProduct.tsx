import useAPI from "hooks/useAPI";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add_to_cart, remove_from_cart } from "redux/actions/cartAction";
import ProductService from "services/Product.service";

export const SingleProduct = () => {
  const { id = "" } = useParams();

  const { data: product } = useAPI<IProduct>(() =>
    ProductService.getProductDetailsById(id)
  );

  const dispatch = useDispatch();

  return (
    <div>
      {product ? (
        <img
          src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
          alt=""
        />
      ) : null}
      <button
        className="p-2 border"
        onClick={() => dispatch(add_to_cart(product as IProduct))} // dispatch -> action
      >
        Add To cart
      </button>
      <button
        className="p-2 border"
        onClick={() => dispatch(remove_from_cart(id))}
      >
        Remove From cart
      </button>
    </div>
  );
};
