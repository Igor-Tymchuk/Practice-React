import products from "../../assets/products.json";

const CartItemList = () => {
  return (
    <ul>
      {products.map(({ id, name, price, quantity }) => (
        <li key={id}>
          <span>{name}</span>
          <span>Цена: {price}</span>
          <span>Количество: {quantity}</span>
          <button>Увеличить</button>
          <button>Уменьшить</button>
          <button>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default CartItemList;
