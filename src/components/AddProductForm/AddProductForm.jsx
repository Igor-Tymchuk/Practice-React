const AddProductForm = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="Название товара" />
      <input type="number" name="price" placeholder="Цена товара" />
      <input type="number" name="quantity" placeholder="Количество" />
      <button type="submit">Добавить товар</button>
    </form>
  );
};

export default AddProductForm;
