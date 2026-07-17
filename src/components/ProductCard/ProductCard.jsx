import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product }) {

  return (

       <Link
      to={`/product/${product.id}`}
      className="product-link"
    >

    <div className="product-card">

      <button onclick={() => dispatch(addToCart(product))} className="add_to_cart_button">

        Add to Card

      </button>

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

        <span>{product.colors}</span>

        <small>

          Buy 2 get 50% off

        </small>

      </div>

    </div>

  </Link> );

}

export default ProductCard;