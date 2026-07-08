import "./HeroSection.css";

import leftImg from "../../assets/hero-left.jfif";
import centerImg from "../../assets/hero-center.jfif";
import rightImg from "../../assets/hero-right.jpg";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-card left">
        <img src={leftImg} alt="" />

        <div className="overlay">
          <h2>TIME TO DOUBLE UP ON YOUR FAVOURITES</h2>

          <p>
            Choose any two styles from the selected articles and get them
            at half price.
          </p>

          <div className="hero-buttons">
            <button>SHOP MEN →</button>
            <button>SHOP WOMEN →</button>
            <button>SHOP KIDS →</button>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <img src={centerImg} alt="" />
      </div>

      <div className="hero-card">
        <img src={rightImg} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;