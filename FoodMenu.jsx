import FoodCard from "./FoodCard.jsx";

function FoodMenu({ foods, onAddToCart }) {
  if (foods.length === 0) {
    return (
      <div className="no-foods">
        <h2>No food items found</h2>
        <p>Try selecting another category.</p>
      </div>
    );
  }

  return (
    <div className="food-grid">
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default FoodMenu;
