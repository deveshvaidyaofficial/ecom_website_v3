import "./ProductSection.css";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";

function ProductSection() {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductSection;