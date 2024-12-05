import { useDispatch, useSelector } from "react-redux";
import {
  changeAmountPlus,
  changeAmountMinus,
  goodsItems,
} from "../../redux/cartSlice";
import { fetchData, deleteData } from "../../redux/operations";
import { useEffect } from "react";

const CartItemList = () => {
  const dispatch = useDispatch();
  const products = useSelector(goodsItems);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handlePlus = (id) => {
    dispatch(changeAmountPlus(id));
  };

  const handleMinus = (id) => {
    dispatch(changeAmountMinus(id));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ul>
      {products.map(({ id, name, price, quantity }) => (
        <li key={id}>
          <span>{name}</span>
          <span>Цена: {price}</span>
          <span>Количество: {quantity}</span>
          <button disabled={quantity >= 100} onClick={() => handlePlus(id)}>
            Увеличить
          </button>
          <button disabled={quantity <= 0} onClick={() => handleMinus(id)}>
            Уменьшить
          </button>
          <button onClick={() => handleDelete(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default CartItemList;
