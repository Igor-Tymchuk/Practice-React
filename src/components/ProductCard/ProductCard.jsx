import s from "./ProductCard.module.css";

const ProductCard = ({ products }) => {
  return (
    <div className={s.ul}>
      <ul>
        <li>
          {products[0].name}
          <p>{products[0].age}</p>
          <p>{products[0].specialty}</p>
        </li>
      </ul>
    </div>
  );
};

export default ProductCard;
