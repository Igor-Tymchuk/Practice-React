import AddProductForm from "../AddProductForm/AddProductForm";
import CartItemList from "../CartItemList/CartItemList";
import CartSummary from "../CartSummary/CartSummary";

const Cart = () => {
  return (
    <div>
      <h1>Корзина</h1>
      <AddProductForm />
      <CartItemList />
      <CartSummary />
    </div>
  );
};

export default Cart;
