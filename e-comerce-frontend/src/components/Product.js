import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {

  const productLink = `/http://www.novius.co.in/${productId}`;
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <a class="info__button" href="http://www.novius.co.in/">View</a>

      </div>
    </div>
  );
};

export default Product;
