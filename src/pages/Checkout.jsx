import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Checkout() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();
  const { user } = useAuth();

  function handlePlaceOrder() {
    alert("Order placed! Thank you, " + user.email);
    clearCart();
  }

  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="container">
          <h2 className="page-title">Your cart</h2>
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/" className="btn btn-primary">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <h2 className="page-title">Your cart</h2>

        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-img" />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">NLe{item.price}</p>
              </div>

              <div className="cart-item-qty">
                <button
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <p className="cart-item-subtotal">
                NLe{(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                className="cart-remove"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Total: NLe{totalPrice.toFixed(2)}</h3>
          <div className="cart-summary-actions">
            <button className="btn btn-secondary" onClick={clearCart}>
              Clear cart
            </button>
            <button className="btn btn-primary" onClick={handlePlaceOrder}>
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}