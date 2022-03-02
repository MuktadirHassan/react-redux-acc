import useAPI from "hooks/useAPI";
import ProductService from "../../../services/Product.service";
import { DSlider } from "../../components/custom/DSlider";
import { ProductsArray } from "../../components/home/ProductsArray";
const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   ProductService.getAllProducts()
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err));
  // }, []);

  const { data: products } = useAPI<IProduct[]>(ProductService.getAllProducts);

  return (
    <main>
      <div className="py-20">
        <DSlider />
      </div>
      <div>{products && <ProductsArray products={products} />}</div>
    </main>
  );
};
export default Home;
