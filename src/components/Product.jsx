import useStore from '../store';
import '../styles/products.css'

export default function Product (props) {
    const addToCart = useStore((state) => state.addToCart);
    const decreaseQuantity = useStore((state) => state.decreaseQuantity);
    const cart = useStore((state) => state.cart);

    const existingItem = cart.find((item) => item.title === props.title);
    
    const quantity = existingItem ? existingItem.quantity : 0;
    const inCart = quantity > 0;

    function handleAdd() {
        addToCart({ title: props.title, price: props.price });
    }
    
    function handleDecrease() {
        decreaseQuantity(props.title);
    }

    return (
        <div className="product">
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                <p>{props.price}</p>
                {inCart ? 
                    <div className="quantityControls">
                        <button onClick={handleDecrease}>-</button>
                        <p>{quantity}</p>
                        <button onClick={handleAdd}>+</button>
                    </div>
                    :
                    <button className="addToCartButton" onClick={handleAdd}>Add to Cart</button>
                }
            </div>
            
        </div>
    );
}