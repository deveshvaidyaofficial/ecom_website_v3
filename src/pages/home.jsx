import React from 'react'
import PromoBar from "../components/PromoBar/PromoBar";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import CategorySection from "../components/CategorySection/CategorySection";
import ProductSection from "../components/ProductSection/ProductSection";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <PromoBar />
      <Navbar />
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <Newsletter />
      <Footer />
    </>
  );
}
export default Home;





