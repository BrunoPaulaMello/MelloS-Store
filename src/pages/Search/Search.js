import { useEffect, useState } from "react"
import "../Product/Product.css"
import { Link, useParams } from "react-router-dom";

export default function Search() {
  const [prods, setProds] = useState()
  const {search} = useParams()

  useEffect(() => {
    async function loadData() {
      const req = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + search
      );
      const data = await req.json();
      console.log(data.results);
      setProds(data.results);
    }

    loadData();
  }, [search]);

  return (
    <div className="product-container">
      {prods ? (
        prods.map((e) => {
          return (
            <div
              key={e.id}
              className="product"
            >
                <Link to={"/product/" + e.id}>
                    <p>{e.title}</p>
                    <img src={e.thumbnail} alt={e.title} className="prod-img"/>
                </Link>
            </div>
          );
        })
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}