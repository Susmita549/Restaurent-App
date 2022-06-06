import React from 'react';
import styles from './restaurent.module.css'

const RestaurentCard = ({url,name,category,total_cost,rating,total_votes,total_reviews, payment_methods}) => {
    const { card, cash, upi } = payment_methods;
  return (
    <>
    <div>
      
        <div className={styles.parent}>
          <div className={styles.top}>
             <div className={styles.box}>
               <div className={styles.left}>
                 <img src={url} alt="images" />
               </div>
               <div className={styles.middle}>
                 <h1 className={styles.name}>{name}</h1>
                 <p className={styles.light}>{category}</p>
                 <p className={styles.light}>Cost ₹{total_cost} for one</p>
                 <p className={styles.dark} >Min ₹ 50 • Upto 30 min</p>
                 <p className={styles.dark} >
                 Accepts
                    <span>
                    {card && cash && upi
                      ? " all payments"
                      : cash && card
                      ? " cash & card payments only"
                      : cash
                      ? " cash payments only"
                      : card
                      ? " card payments only"
                      : " upi payments only"}
                    </span>
                 </p>
               </div>
               <div className={styles.right}>
                 <button className={styles.button}>{rating} ★</button>
                 <p className={styles.vote}>{total_votes} votes</p>
                 <p className={styles.vote}>{total_reviews} reviews</p>
               </div>
             </div>
          </div>
          <div className={styles.down}>
              <div><p>Order Online ▶</p></div>
          </div>
        </div>
      
    </div>
    </>
  );
}

export default RestaurentCard;
