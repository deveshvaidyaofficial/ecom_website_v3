import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-top">
        <span>help</span>
        <span>orders and returns</span>
        <span>sign up</span>
        <span>log in</span>
      </div>

      <div className="nav-main">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" width="100" height="50" alt="Adidas Logo" />
        </div>

        <ul className="nav-links">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>SPORTS</li>
          <li>LIFESTYLE</li>
          <li className="outlet">OUTLET</li>
        </ul>

        <div className="nav-icons">
          <span>🔍</span>
          <span>👤</span>
          <span>♡</span>
          <span>🛍️</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;