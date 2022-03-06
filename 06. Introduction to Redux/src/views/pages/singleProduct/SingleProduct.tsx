import useAPI from "hooks/useAPI";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductService from "services/Product.service";
import { addToCart, removeFromCart } from "./../../../redux/actions/cartAction";

export const SingleProduct = () => {
  const { id = "" } = useParams();
  const dispatch = useDispatch();

  const { data } = useAPI<IProduct>(() =>
    ProductService.getProductDetailsById(id)
  );

  return (
    <div>
      {data ? (
        <img src={process.env.REACT_APP_IMAGE_BASE_URL + data.image} alt="" />
      ) : null}
      <button
        className="p-2 border"
        onClick={() => dispatch(addToCart(data as IProduct))}
      >
        Add To cart
      </button>
      <button
        className="p-2 border"
        onClick={() => dispatch(removeFromCart(id))}
      >
        Remove From cart
      </button>
    </div>
  );
};
