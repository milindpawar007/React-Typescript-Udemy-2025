import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart-slice";
import { userCartDispatch } from "../store/hooks";
type ProductProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) {
  const dispatch = userCartDispatch();
  function handleAddToCart() {
       dispatch(addToCart({id,title,price}))
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
