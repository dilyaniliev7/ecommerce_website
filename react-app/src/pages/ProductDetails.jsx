import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProductById} from "../data/products.js";


export default function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const foundProduct = getProductById(id)

        if (!foundProduct) {
            navigate("/");
            return;
        }

        setProduct(foundProduct)

    }, [id]);

    if (!product) {
        return <h1>Loading...</h1>
    }


    return (
        <div className="page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="product-detail-content">
                        <h1 className="product-detail-name">{product.name}</h1>
                        <h1 className="product-detail-price">{product.price}</h1>
                        <h1 className="product-detail-description">{product.description}</h1>
                        <button className="btn btn-primary">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}