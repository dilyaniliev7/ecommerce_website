import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProductById} from "../data/products.js";
import {useCart} from "../context/CartContext.jsx";


export default function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate()
    const {addToCart, cartItems} = useCart()



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
    const productInCart = cartItems.find((item) => item.id === product.id)

    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";


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
                        <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Card {productQuantityLabel}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}