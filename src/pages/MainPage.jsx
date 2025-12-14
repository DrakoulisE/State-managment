import { useMediaQuery } from 'react-responsive';
import ProductList from "../components/ProductList.jsx";
import Cart from "../components/Cart.jsx";
import useStore from '../store.js';
import '../styles/mainPage.css';


export default function MainPage () {
    const cartVisible = useStore((state) => state.cartVisible);

    return (
        <div className="mainPage">
            <div className="productList">
                <ProductList/>
            </div>
            <div className={`cart ${cartVisible ? 'active' : ''}`}>
                <Cart/>
            </div>

        </div>
    );
}
