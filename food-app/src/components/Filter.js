import React from "react"

function Filter({ setCategoryFilter, setFoodSearch }) {
  return (
    <>
      <div className="phase-buttons">
        <button className="btn" onClick={() => setCategoryFilter("All")}>All</button>
        <button className="btn" onClick={() => setCategoryFilter("sashimi/nigiri")}>Sushi</button>
        <button className="btn" onClick={() => setCategoryFilter("rice dishes")}>Entrees</button>
        <button className="btn" onClick={() => setCategoryFilter("starter")}>Starter</button>
        <button className="btn" onClick={() => setCategoryFilter("noodles")}>Noodles</button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setFoodSearch(e.target.value)}
      />
    </>
  );
}

export default Filter;