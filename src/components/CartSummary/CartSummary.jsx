import { useDispatch, useSelector } from "react-redux";
import {
  calcTotalPrice,
  goodsItems,
  totalGoodsPrice,
} from "../../redux/cartSlice";
import { useEffect } from "react";

const CartSummary = () => {
  const dispatch = useDispatch();
  const finalPrice = useSelector(totalGoodsPrice);
  const goods = useSelector(goodsItems);

  useEffect(() => {
    dispatch(calcTotalPrice(goods));
  }, [goods, dispatch]);

  return (
    <div>
      <h3>Общая стоимость: {finalPrice} </h3>
    </div>
  );
};

export default CartSummary;
