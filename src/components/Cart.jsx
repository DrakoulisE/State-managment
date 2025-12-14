import CartItem from './CartItem.jsx';
import useStore from '../store.js';
import '../styles/cart.css';

export default function Cart() {
    const cart = useStore((state) => state.cart);
    const removeFromCart = useStore((state) => state.removeFromCart);

    const total = cart.reduce((acc, item) => {
        const priceNum = parseFloat(item.price.replace('$', '')); 
        return acc + (priceNum * item.quantity);
    }, 0);

    return (
        <div className="cartContainer">
            <div>
                <h2>Cart</h2>
                <div className="cartList">
                    {cart.map((item, index) => (
                        <CartItem 
                            key={index}
                            title={item.title} 
                            price={item.price} 
                            quantity={item.quantity} 
                            onRemove={() => removeFromCart(item.title)} 
                        />
                    ))} 
                </div>
                <div className="cartTotal">
                    <p>Total: {total}€</p>
                </div>
            </div>
        </div>
    );
}