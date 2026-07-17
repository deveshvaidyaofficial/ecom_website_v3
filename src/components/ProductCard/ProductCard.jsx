import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();


  return (

    <Link
      to={`/product/${product.id}`}
      className="product-link"
    >

      <div className="product-card">

        <div className="product-image">

          <img
            src={product.image}
            alt={product.title}
          />

        </div>

        <div className="product-details">

          <div className="price">

            {product.price}

          </div>

          <h3>{product.title}</h3>

          <p>{product.category}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>

          <span>{product.colors}</span>

          <small>

            Buy 2 get 50% off

          </small>

        </div>

      </div>

    </Link>);

}

export default ProductCard;