import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import "./Header.css"

export default function Header(){
    return(
        <>
            <header className="header">
                <div className="div-logo">
                    <p>Mello's Store</p>
                    <SearchBar/>
                </div>
                <ul className="ul-header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link>Login</Link></li>
                    <li><Link>Sing Up</Link></li>
                </ul>
            </header>
        </>
    )
}