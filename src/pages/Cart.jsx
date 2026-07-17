import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-bag">

      <div className="bag-left">

        <h1>
          SHOPPING BAG
          <span> ({cartItems.length} item)</span>
        </h1>

        {cartItems.map((item) => (
          <div className="bag-item" key={item.id}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="bag-info">

              <h3>{item.title}</h3>

              <p>₹{item.price}</p>

            </div>

            <div className="bag-actions">

              <h3>
                ₹{item.price * item.quantity}
              </h3>

              <div className="qty-box">

                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>

              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="bag-right">

        <h2>ORDER SUMMARY</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span className="green">FREE</span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total</span>
          <span>₹{subtotal}</span>
        </div>

        <button className="checkout-btn">
          PROCEED TO CHECKOUT
        </button>

        <button className="continue-btn">
          Continue Shopping
        </button>

      </div>

    </div>
  );
};

export default Cart;