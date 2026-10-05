function FoodCard({ food, onAddToCart }) {
  return (
    <div className="food-card">
      <div className="image-container">
        <img src={food.image} alt={food.name} />

        <span className="rating">
          ⭐ {food.rating}
        </span>
      </div>

      <div className="food-info">
        <span className="food-category">{food.category}</span>

        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="food-footer">
          <span className="price">₹{food.price}</span>

          <button
            className="add-btn"
            onClick={() => onAddToCart(food)}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
