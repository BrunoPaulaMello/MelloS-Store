import Header from "../Header/Header";
import Footer from "../Footer/Footer.js";
import "../../App.css"

export default function MainContainer({ children }){
    return(
        <>
            <Header/>
            <div className="App">{ children }</div>
            <Footer/>
        </>
    )
}