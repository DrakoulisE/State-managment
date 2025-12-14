import '../styles/cartItem.css';

export default function CartItem({ title, price, quantity, onRemove }) {
    return (
        <div className="cartItem">
            <h3>{title}</h3>
            <div className="cartItemDetails">
                <div>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <button onClick={onRemove}>Remove</button>
            </div>
        </div>
    );
}