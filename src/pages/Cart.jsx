import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from "../redux/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector(
        state => state.cart.cartItems
    );

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-page">

            <h1>Shopping Bag</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">

                            <img src={item.image} width="120" />

                            <div>

                                <h3>{item.title}</h3>

                                <p>₹{item.price}</p>

                                <button
                                    onClick={() =>
                                        dispatch(decreaseQuantity(item.id))
                                    }
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() =>
                                        dispatch(increaseQuantity(item.id))
                                    }
                                >
                                    +
                                </button>

                                <button
                                    onClick={() =>
                                        dispatch(removeFromCart(item.id))
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </div>
                    ))}

                    <h2>Total ₹{total}</h2>
                </>
            )}

        </div>
    );
};

export default Cart;