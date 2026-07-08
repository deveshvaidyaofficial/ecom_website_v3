
import "./CategorySection.css";
function CategorySection() {
  const categories = [
    "MEN",
    "WOMEN",
    "KIDS",
    "SHOES",
    "CLOTHING",
    "ACCESSORIES",
  ];

  return (
    <div className="CategorySection">
      {categories.map((item) => (
        <button key={item}>{item}</button>
      ))}
    </div>
  );
}

export default CategorySection;