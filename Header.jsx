function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span>🍴</span>
          <h1>Foodie</h1>
        </div>

        <div className="cart">
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
