import React from "react";
import "../styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducer";


function GoodsItem({ title, description, price, id }) {
  let dispatch = useDispatch()

  return (
    <div className="goods-item" key={id}>
      <h3 className="goods-item__title">{title}</h3>
      <p className="goods-item__price">
        <span className="goods-item__price-value goods-item__price-value_old">{price * 1.2}.00$ </span>
        <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
      </p>
      <p className="goods-item__description">{description}</p>
      <button onClick={() => {
        dispatch(addToCart({
          id: id,
          title: title,
          description: description,
          price: price
        })
        )

      }} className="goods-item__add-to-card">Add to cart</button>
    </div>
  );
}


export default GoodsItem;