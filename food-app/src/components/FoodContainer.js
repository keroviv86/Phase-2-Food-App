
import React, {useState} from 'react';
import FoodCart from './FoodCart'
import Filter from './Filter'

function FoodContainer({items, handleAddToCart}) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [foodSearch, setFoodSearch] = useState("");

    const foodItems = [...items]
    .filter((items) => {
      return categoryFilter === "All" || items.category === categoryFilter;
    })
    .filter((items) => {
      return items.name.toLowerCase().includes(foodSearch.toLowerCase());
    })
    .map((items) => {
      return <FoodCart key={items.id} item={items} handleAddToCart={handleAddToCart} />;
    });
    return (
        <main className="block col-2">
          <h2>MENU</h2>
          <Filter 
          setCategoryFilter={setCategoryFilter}
          setFoodSearch={setFoodSearch}
          />
          {foodItems}
          <div className="row">
          </div>
        </main>
      );
    }


export default FoodContainer;