import { useDispatch } from "react-redux";
import { addData } from "../../redux/operations";

const AddProductForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const price = Number(form.elements.price.value);
    const quantity = Number(form.elements.quantity.value);
    dispatch(addData({ name, price, quantity }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Название товара" />
      <input type="number" name="price" placeholder="Цена товара" />
      <input type="number" name="quantity" placeholder="Количество" />
      <button type="submit">Добавить товар</button>
    </form>
  );
};

export default AddProductForm;
