import "./ProductSection.css";
import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function ProductSection() {
  return (
    <section className="products-section">

      <div className="products-header">

        <h2>1961 Results</h2>

        <button className="filter-btn">
          Filter & Sort
        </button>

      </div>

      <div className="products-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>

    </section>
  );
}

export default ProductSection;