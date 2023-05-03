import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Product.css"
import { addToCart, removeFromCart } from "../Cart/CartFunctions"

export default function Product(){
    const {id} = useParams()
    const [prod, setProd] = useState()

    useEffect(() => {
        async function loadData() {
          const req = await fetch(
            "https://api.mercadolibre.com/items/" + id
          );
          const data = await req.json();
          console.log(data)

          setProd(data);
        }
    
        loadData();
      }, []);

    return (
        <>
            {prod? 
            <div className="prod">
                <div className="prodImage">
                    <img src={prod.thumbnail} alt={prod.title}/>
                </div>
                <div className="prodData">
                    <h1>{prod.title}</h1>
                    <p>R${prod.price/100}</p>
                    {prod.warranty? <p>{prod.warranty}</p>: <p>Sem garantia!</p>}
                    {prod.available_quantity? <p>Quantidade disponível: {prod.available_quantity}</p>: <p>Sem dados sobre a disponibilidade.</p>}
                    <button onClick={()=>addToCart(prod, prod.available_quantity)}>Adicionar</button>
                    <button onClick={()=>removeFromCart(prod)}>Remover</button>
                </div>
            </div>: <p>Carregando...</p>}
        </>
    )
}