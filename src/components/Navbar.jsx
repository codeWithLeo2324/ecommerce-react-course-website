import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";


export default function Navbar(){
    const {user, logout} = useAuth()
    const {totalItems} = useCart()
    const navigate = useNavigate();

    function handleLogout(){
        logout();
        navigate("/")
    }
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                <span className="leo">Leo's</span> ShopHub
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/checkout" className="navbar-link">
                    
                    Cart 
                    {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                    </Link>
                </div>
                <div className="navbar-auth">
                    <div className="navbar-auth-links">
                        {user ? (
                            <>
                            <span className="navbar-user">{user.email}</span>
                            <button className="btn btn-secondary" onClick={handleLogout}>
                                Logout
                                </button>
                            </>

                        ): (
                            <>
                        <Link to="/auth?mode=login" className="btn btn-secondary">Login</Link>
                        <Link to="/auth?mode=signup" className="btn btn-primary">Signup</Link>
                            </>
                        )
                    }
                    </div>
                </div>
            </div>
        </nav>
    )
}