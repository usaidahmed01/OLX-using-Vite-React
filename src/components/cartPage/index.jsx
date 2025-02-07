import { useSelector } from "react-redux";
import emptyCart from '../../assets/emptycart.jpg'
import Card from "../card";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/adcart";
import './index.css';

function CartPage(props) {
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    if (cart.length === 0) return <div className="flex justify-center items-center"><img src={emptyCart} alt="img-not-found" /></div>;

    return (
        <>
            <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'> 
                {cart.map((item) => {
                    return (
                        <div className="cartPage-main" key={item.id}> {/* Adjusted margin-bottom for spacing */}
                            <Card item={item} />
                            <div className='cartPage-remove-btn' onClick={() => {
                                dispatch(removeFromCart(item));
                            }}>Remove From Cart</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default CartPage;
