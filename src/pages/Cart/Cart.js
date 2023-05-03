import { clearCart, getCart } from "./CartFunctions"
import "./Cart.css"
import { Link } from "react-router-dom"

export default function Cart(){
    const items = getCart()

    var total = 0

    items.map((i)=>{
        total += i.price*i.quantity/100
    })

    return(
        <div className="cart">
            <div className="cartContainer">
                {items.map((i)=>{
                    return(
                        <div className="items" key={i.id}>
                            <Link to={"/product/" + i.id}>
                                <p>{i.title}</p>
                                <img src={i.thumbnail} alt={i.title} className="img-items"/>
                                <p>Quantidade: {i.quantity}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="totalCart">
                <h3>Carrinho</h3>
                <p>Total: R${total}</p>
                <button onClick={clearCart}>Esvaziar Carrinho</button>
            </div>
        </div>
    )
}