import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export default function Products() {
    const [products , setProducts] = useState([])
    const [query, setQuery] = useState('mens-watches')

    const getCategory = (evnt) => {
        setQuery(evnt.currentTarget.innerText.toLowerCase())
    }

    useEffect(() =>{
        fetch(`https://dummyjson.com/products/category/${query}?&select=title,price,thumbnail,description,category`)
        .then(res => res.json())
        .then(data => setProducts(data.products))
    }, [query])
    const prodElements = products.map((product)=> (
        <div key={product.id} className="prod-tile">
            <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} />
                <div className="prod-info">
                    <h3>{product.title}</h3>
                    <p>${product.price}<span>$</span></p>
                </div>
                <i className={`prod-type ${product.category} selected`}>{product.category}</i>
            </Link>
        </div>
    ))

  return (
    <>
        <div className="prod-list-container">
            <h1>Explore your Product</h1>
            <nav className="category-nav d-flex gap-2">
                <span className="badge" onClick={getCategory}>mens-watches</span>
                <span className="badge" onClick={getCategory}>Laptops</span>
                <span className="badge" onClick={getCategory}>Sunglasses</span>
            </nav>
            <div className="prod-list">
                {prodElements}
            </div>
        </div>
    </>
  )
}
