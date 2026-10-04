import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({product}){
      const {addToCart} = useCart();
    return (
        <div>
             <div className="product-card" >
                             <img src={product.image} alt={product.name} className="product-card-img" />
                            <div className="product-card-content">
                                <h3 className="product-card-name">{product.name}</h3>
                                <p className="product-card-price">NLe{product.price}</p>
                                <div className="product-card-action">
                                    <Link to={`/product/${product.id}`} className="btn btn-secondary">View Details</Link>
                                    <button className="btn btn-primary" onClick={() =>  addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
        </div>
    )
}