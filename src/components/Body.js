import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState } from "react";
/***
 * hooks : normal js utility functions
 * useState
 * useEffect
 * whenever a state variable is chages React re-renders the component
 * Reconcilliation algorithm: also known as react fiber (React 16), whenever something changes on UI , called reconciliation
 * Virtual DOM: it is the representation of the real DOM,  it is nothing but a normal JS object which for example get returned from React.createElement({}),  it is a nested object of the component
 * Diff algorithm: basically finds the difference between two DOMs, then calculates and actually update the DOM
 * React is fast because of efficient DOM manipulations
 * */

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(reslist);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants();
            filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
