import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>

                <div className="cart-item-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs. {item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id) } className='cross'>X</p>

                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{0}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{2}</p>
          </div>
          <hr />

          <div className="cart-total-details">
              <p>Total</p>
              <p>{0}</p>
          </div>
          <hr />
        </div>

      </div>
      <button>PROCEED TO CHECKOUT</button>

      <div className='cart-promocode'>
        <div>
          <p>Have a promo code, Enter here.</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='Enter promocode here..' />
            <button >Submit</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
