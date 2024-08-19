import React from "react";

function Filter({ onCategoryChange, searchText }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={searchText}  onChange={(e)=> onCategoryChange(e.target.value)}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
