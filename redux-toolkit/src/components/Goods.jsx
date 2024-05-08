import React, { useEffect, useState } from "react";
import "../styles.css";

import GoodsItem from './GoodsItem';
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../store/reducer";
import { Flex, Spin } from 'antd';
import { Skeleton } from 'antd';



function Goods() {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
  }, [])
  
  let goods = useSelector((state) => state.goods.goods)
  let isLoading = useSelector((state) => state.goods.isLoading)
  let error = useSelector((state) => state.goods.error)

  console.log(goods)

  if(isLoading){
    return <Skeleton />
  }

  if(error){
   return <h1>ERROR...</h1>

  }

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