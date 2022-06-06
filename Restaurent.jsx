import React, { useState } from "react";
import Data from "./data.json";
import RestaurentCard from "./RestaurentCard";
import styles from "./restaurent.module.css";
const Restaurent = () => {
  const [sortPrice, setSortPrice] = useState(Data);
  const [initData, setInitData] = useState(Data);
  const [type, setType] = useState("");

  const handlePrice = (e) => {
    // setSortPrice(e.target.value);
    // console.log("Clicked");
    // console.log(sortPrice);
    if (e.target.value === "h2l") {
      let newItem = [...initData];
      newItem.sort((a, b) => b.total_cost - a.total_cost);
      setSortPrice([...newItem]);
    } else if (e.target.value === "l2h") {
      let newItem = [...initData];
      newItem.sort((a, b) => a.total_cost - b.total_cost);
      setSortPrice([...newItem]);
    }
  };

  const handleFilter = (e) => {
    if (e.target.value == 1) {
      let res = initData.filter((item) => item.rating >= 1);
      setSortPrice([...res]);
    }
    if (e.target.value == 2) {
      let res = initData.filter((item) => item.rating >= 2);
      setSortPrice([...res]);
    }
    if (e.target.value == 3) {
      let res = initData.filter((item) => item.rating >= 3);
      setSortPrice([...res]);
    }
    if (e.target.value == 4) {
      let res = initData.filter((item) => item.rating >= 4);
      setSortPrice([...res]);
    }
    if (e.target.value == 0) {
      let res = initData.filter((item) => item.rating >= 0);
      setSortPrice([...res]);
    }
  };

  const handleClick = (e) => {
    
    setType(e.target.value);
  };

  return (
    <div>
      <h1 className={styles.heading}>Restaurent 🍴 🍽</h1>
      <div className={styles.top_container}>
        <div>
          <select onChange={handleFilter} className={styles.select} name="sort">
            <option value="0">Sort-By-Ratings-Star★</option>
            <option value="4">Restaurants above 4★</option>
            <option value="3">Restaurants above 3★</option>
            <option value="2">Restaurants above 2★</option>
            <option value="1">Restaurants above 1★</option>
          </select>
        </div>
        <div>
          <select className={styles.select} onChange={handleClick}>
            <option value="">Payment Method</option>
            <option value="card">Card Only</option>
            <option value="cash">Cash Only</option>
            <option value="">All Accepted</option>
          </select>
        </div>
        <div>
          <button
            className={styles.select}
            onClick={(e) => handlePrice(e)}
            value="h2l"
          >
            Sort-High-Low
          </button>
        </div>
        <div>
          <button
            className={styles.select}
            onClick={(e) => handlePrice(e)}
            value="l2h"
          >
            Sort-Low-High
          </button>
        </div>
      </div>
      <div className={styles.container}>
      {
          
           type
          ? sortPrice
              .filter((el) => el.payment_methods[type] === true)
              .map((item, index) => <RestaurentCard key={index} {...item} />)
          
          : sortPrice.map((item, index) => (
              <RestaurentCard key={index} {...item} />
            ))}
      </div>
    </div>
  );
};

export default Restaurent;
// type
//           ?//resData
//               .filter((el) => el.payment_methods[type] === true)
//               .map((item, index) => <RestaurentCard key={index} {...item} />)



//               {sortPrice.map((item, index) => (
//                 <RestaurentCard key={index} {...item} />
//               ))}