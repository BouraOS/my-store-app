import { useEffect, useState } from "react";
import {useParams } from "react-router-dom"

export default function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [id])   
    return (
        <div className="prod-detail-container">
            {product ? (
                <div className="prod-detail">
                    <img src={product.thumbnail} />
                    <i className={`prod-type ${product.category} selected`}>
                        {product.category}
                    </i>
                    <h2>{product.title}</h2>
                    <p className="prod-price"><span>{product.price}</span>$</p>
                    <p className="prod-brand">Brand :<span>{product.brand}</span></p>
                    <p>{product.description}</p>
                    <button className="link-button">Rent this prod</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
