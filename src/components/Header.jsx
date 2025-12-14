import {
        ShoppingBasket ,
} from 'lucide-react'
import useStore from '../store.js'
import '../styles/index.css'

export default function Header() {
    const toggleCart = useStore((state) => state.toggleCart);
    const cartVisible = useStore((state) => state.cartVisible);

    const cart = useStore((state) => state.cart);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return(
        <header>
            <div className="modeButton"> </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}> 
                <h1>E-Store</h1>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p>State Management Demo</p>
                    <p>in React</p>
                </div>
            </div>

            <button onClick={toggleCart} className={`cartButton ${cartVisible ? 'active' : ''}`}>
                <ShoppingBasket/>
                <p className="itemCountOnButton">{totalItems}</p>
            </button>
            <div className="cartButtonFake"></div>
        </header>
    );
}