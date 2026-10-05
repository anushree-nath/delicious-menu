import { useState } from "react";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import FoodMenu from "./components/FoodMenu.jsx";
import foods from "./data/food.js";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = [
    "All",
    ...new Set(foods.map((food) => food.category)),
  ];

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  const addToCart = (food) => {
    setCart((currentCart) => [...currentCart, food]);
  };

  return (
    <>
      <Header cartCount={cart.length} />

      <main>
        <section className="hero">
          <div className="container">
            <p className="subtitle">Fresh & Delicious</p>

            <h2>
              Discover Your
              <span> Favorite Food</span>
            </h2>

            <p className="hero-description">
              Explore our delicious menu and order your favorite meals
              today.
            </p>
          </div>
        </section>

        <section className="menu-section container">
          <div className="section-heading">
            <div>
              <p className="small-title">OUR MENU</p>
              <h2>Popular Dishes</h2>
            </div>

            <p className="item-count">
              {filteredFoods.length} items
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <FoodMenu
            foods={filteredFoods}
            onAddToCart={addToCart}
          />
        </section>
      </main>

      <footer>
        <p>© 2026 Foodie. Made with ❤️</p>
      </footer>
    </>
  );
}

export default App;
