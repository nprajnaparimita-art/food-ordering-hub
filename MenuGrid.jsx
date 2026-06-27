import FoodCard from "./FoodCard";

function MenuGrid({ foods, addToCart }) {
  return (
    <div className="grid">
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default MenuGrid;