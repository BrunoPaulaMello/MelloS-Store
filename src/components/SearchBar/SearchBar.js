import { useState } from "react"
import "./SearchBar.css"
import { Link } from "react-router-dom"

export default function SearchBar(){

    const [val, setVal] = useState()

    return(
        <>
            <input 
                className="bar"
                type="text" 
                placeholder="Pesquisar" 
                onChange={(e)=>{
                    setVal(e.target.value)
                }}
            />
            
            <Link to={"/search/" + val}><button className="but-bar">Enviar</button></Link>
        </>
    )
}