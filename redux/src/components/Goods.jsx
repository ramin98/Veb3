import React, { useEffect, useState } from "react";
import "../styles.css";

import GoodsItem from './GoodsItem';
import { useDispatch, useSelector } from "react-redux";
import { getFetch } from "../store/reducer";

function Goods() {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFetch())
  }, [])
  
  let goods = useSelector((state) => state.goods)
  console.log(goods)

  return (
    <div className="goods">
      <h2 className="goods__title">Video Games</h2>
      {goods.map(item => (
        <ul className="goods__list" key={item.id}>
          <li className="goods__list-item">
            <GoodsItem {...item} />
          </li>
        </ul>
      ))}
    </div>
  );
}


export default Goods;