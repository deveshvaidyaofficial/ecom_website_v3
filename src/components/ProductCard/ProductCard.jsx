import styles from "./ProductCard.module.css";
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div classname={styles.wishlist}>♡</div>

      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <p className="price">{product.price}</p>
        <h4>{product.title}</h4>
        <p className="category">{product.category}</p>
        <p className="colors">{product.colors}</p>
        <p className="offer">Buy 2 get 50% off</p>
      </div>
    </div>
  );
}

export default ProductCard;