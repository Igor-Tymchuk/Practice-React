import { useDispatch, useSelector } from "react-redux";
import {
  changeAmountPlus,
  changeAmountMinus,
  deleteItem,
  goodsItems,
} from "../../redux/cartSlice";

const CartItemList = () => {
  const dispatch = useDispatch();
  const products = useSelector(goodsItems);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handlePlus = (id) => {
    dispatch(changeAmountPlus(id));
  };

  const handleMinus = (id) => {
    dispatch(changeAmountMinus(id));
  };

  return (
    <ul>
      {products.map(({ id, name, price, quantity }) => (
        <li key={id}>
          <span>{name}</span>
          <span>Цена: {price}</span>
          <span>Количество: {quantity}</span>
          <button disabled={quantity >= 5} onClick={() => handlePlus(id)}>
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
