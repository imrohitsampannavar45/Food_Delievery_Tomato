// import React, { useContext, useState } from 'react'
// import './PlaceOrder.css';
// import { StoreContext } from '../../context/StoreContext';



// const PlaceOrder = () => {

//   const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
//   const [data, setData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: ""
//   })
//   const onchangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data => ({ ...data, [name]: value }))
//   }
//   const placeOrder = async (event) => {
//     event.preventDefalut();
//     let orderItems = [];
//     food_list.map((item)=>{
//       if (cartItems[item._id] > 0) {
//         let itemInfo = item;
//         itemInfo["quantity"] = cartItems[item._id];
//         orderItems.push(itemInfo)
//       }
//     })
//     console.log(orderItems);
//   }

//   return (
//     <form onSubmit={placeOrder} className='place-order'>
//       <div className="place-order-left">
//         <p className="title">Delivery Information</p>
//         <div className="multi-fields">
//           <input name='firstname' onChange={onchangeHandler} value={data.firstname} type="text" placeholder='First Name' />
//           <input name='lastname' onChange={onchangeHandler} value={data.lastname} type="text" placeholder='Last Name' />
//         </div>
//         <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Email Address' />
//         <input name='street' onChange={onchangeHandler} value={data.street} type="text" placeholder='Street' />
//         <div className="multi-fields">
//           <input name='city' onChange={onchangeHandler} value={data.city} type="text" placeholder='City' />
//           <input name='state' onChange={onchangeHandler} value={data.state} ype="text" placeholder='State' />
//         </div>
//         <div className="multi-fields">
//           <input name='zipcode' onChange={onchangeHandler} value={data.zipcode} type="text" placeholder='zip code' />
//           <input name='country' onChange={onchangeHandler} value={data.country} type="text" placeholder='Country' />
//         </div>
//         <input name='phone' onChange={onchangeHandler} value={data.phone} type="text" placeholder='Phone' />
//       </div>
//       <div className="place-order-right">
//         <div className="cart-total">
//           <h2>Cart Total</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>₹{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
//             </div>
//           </div>
//           <button type='submit'>Proceed to Payment</button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default PlaceOrder




// import React, { useContext, useState } from 'react';
// import './PlaceOrder.css';
// import { StoreContext } from '../../context/StoreContext';
// import axios from 'axios';

// const PlaceOrder = () => {
//   const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
//   const [data, setData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: ""
//   });

//   const onchangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data => ({ ...data, [name]: value }));
//   };

//   const placeOrder = async (event) => {
//     event.preventDefault(); // Corrected typo here
//     let orderItems = [];
//     food_list.map((item) => {
//       if (cartItems[item._id] > 0) {
//         let itemInfo = item;
//         itemInfo["quantity"] = cartItems[item._id];
//         orderItems.push(itemInfo);
//       }
//     });
//    let orderData = {
//     address:data,
//     items:orderItems,
//     amount:getTotalCartAmount()+2,
//    }
//    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
//    if(response.data.sucess){
//     const{session_url} = response.data;
//     window.location.replace(session_url);
//    }else{
//     alert("Error")
//    }
//   };

//   return (
//     <form onSubmit={placeOrder} className='place-order'>
//       <div className="place-order-left">
//         <p className="title">Delivery Information</p>
//         <div className="multi-fields">
//           <input name='firstname' onChange={onchangeHandler} value={data.firstname} type="text" placeholder='First Name' required />
//           <input name='lastname' onChange={onchangeHandler} value={data.lastname} type="text" placeholder='Last Name' required/>
//         </div>
//         <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Email Address'  required/>
//         <input name='street' onChange={onchangeHandler} value={data.street} type="text" placeholder='Street'  required/>
//         <div className="multi-fields">
//           <input name='city' onChange={onchangeHandler} value={data.city} type="text" placeholder='City' required />
//           <input name='state' onChange={onchangeHandler} value={data.state} type="text" placeholder='State'  required/>
//         </div>
//         <div className="multi-fields">
//           <input name='zipcode' onChange={onchangeHandler} value={data.zipcode} type="text" placeholder='zip code' required />
//           <input name='country' onChange={onchangeHandler} value={data.country} type="text" placeholder='Country'  required/>
//         </div>
//         <input name='phone' onChange={onchangeHandler} value={data.phone} type="text" placeholder='Phone'  required/>
//       </div>
//       <div className="place-order-right">
//         <div className="cart-total">
//           <h2>Cart Total</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>₹{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
//             </div>
//           </div>
//           <button type='submit'>Proceed to Payment</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;



import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
  
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount()+2,
    };

    try {
      const response = await axios.post(url +"/api/order/place", orderData,{ headers: { token } });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
       alert("Error");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Please try again later.");
    }
  };
const navigate =  useNavigate();


  useEffect(()=> {
    if(!token){
navigate('/cart');
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart');
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name='firstname' onChange={onchangeHandler} value={data.firstname} type="text" placeholder='First Name' required />
          <input name='lastname' onChange={onchangeHandler} value={data.lastname} type="text" placeholder='Last Name' required/>
        </div>
        <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Email Address'  required/>
        <input name='street' onChange={onchangeHandler} value={data.street} type="text" placeholder='Street'  required/>
        <div className="multi-fields">
          <input name='city' onChange={onchangeHandler} value={data.city} type="text" placeholder='City' required />
          <input name='state' onChange={onchangeHandler} value={data.state} type="text" placeholder='State'  required/>
        </div>
        <div className="multi-fields">
          <input name='zipcode' onChange={onchangeHandler} value={data.zipcode} type="text" placeholder='zip code' required />
          <input name='country' onChange={onchangeHandler} value={data.country} type="text" placeholder='Country'  required/>
        </div>
        <input name='phone' onChange={onchangeHandler} value={data.phone} type="text" placeholder='Phone'  required/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
