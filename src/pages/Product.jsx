import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import products from "../data/products";


const Product = () => {
  const { product_id } = useParams();
  const product = products.find((p) => p.id === parseInt(product_id));
    if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="product-page">

        <img
          src={product.image}
          alt={product.title}
        />

        <div>

          <h1>{product.title}</h1>

          <h2>{product.price}</h2>

          <p>{product.category}</p>

          <p>{product.colors}</p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Product;