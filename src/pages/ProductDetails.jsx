import { Link, useParams } from "react-router-dom";
import { getProducts } from "./data/products";
import { useCart } from "../context/CartContext";



export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const products = getProducts();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="page">
        <div className="container">
          <h2 className="page-title">Product not found</h2>
          <Link to="/" className="btn btn-primary">Back to shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <div className="details">
          <img src={product.image} alt={product.name} className="details-img" />
          <div className="details-info">
            <h1>{product.name}</h1>
            <p className="details-price">NLe{product.price}</p>
            <p className="details-desc">{product.description}</p>
            <div className="details-actions">
              <button
                className="btn btn-primary btn-large"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link to="/" className="btn btn-secondary btn-large">
                Back to shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}