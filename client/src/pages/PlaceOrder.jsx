import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layouts/Layouts";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Redux/Constants/BASE_URL";
import { orderAction, orderPaymentAction } from "../Redux/Actions/Order";
import { saveShippingAddressAction } from "../Redux/Actions/Cart";
import { ORDER_RESET } from "../Redux/Constants/Order";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cart = useSelector((state) => state.cartReducer);
  const { cartItems, shippingAddress } = cart;

  const orderReducer = useSelector((state) => state.orderReducer);
  const { order, success } = orderReducer;

  // Checkout steps
  const [checkoutStep, setCheckoutStep] = useState(
    shippingAddress?.address ? 'payment' : 'address'
  );

  // Payment method state
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypal');
  const [paymentResult, setPaymentResult] = useState({});

  // subtotal calculations
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  
  const subtotal = addDecimal(
    cartItems.reduce((total, item) => total + item.qty * item.price, 0)
  );
  const taxPrice = addDecimal(Number(0.15 * subtotal).toFixed(2));
  const shippingPrice = addDecimal(subtotal > 100 ? 0 : 20);
  const total = (
    Number(subtotal) +
    Number(taxPrice) +
    Number(shippingPrice)
  ).toFixed(2);

  // Form states
  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setpostalCode] = useState(shippingAddress?.postalCode || "");
  const [country, setCountry] = useState(shippingAddress?.country || "");
  const [addressError, setAddressError] = useState("");

  useEffect(() => {
    if (success) {
      dispatch({ type: ORDER_RESET });
      dispatch(orderPaymentAction(order._id, paymentResult));
      navigate(`/order/${order._id}`);
    }
  }, [dispatch, success, order, paymentResult, navigate]);

  const successPaymentHandler = async (paymentResult) => {
    try {
      setPaymentResult(paymentResult);
      dispatch(
        orderAction({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          totalPrice: total,
          paymentMethod: selectedPaymentMethod,
          price: subtotal,
          taxPrice: taxPrice,
          shippingPrice: shippingPrice,
        })
      );
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  const saveShippingAddress = () => {
    if (!address || !city || !postalCode || !country) {
      setAddressError("Please fill in all address fields");
      return;
    }
    
    setAddressError("");
    dispatch(
      saveShippingAddressAction({
        address,
        city,
        postalCode,
        country,
      })
    );
    setCheckoutStep('payment');
  };

  const editAddress = () => {
    setCheckoutStep('address');
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePlaceOrder = () => {
    if (selectedPaymentMethod === 'cod') {
      successPaymentHandler({ 
        status: 'COMPLETED',
        paymentMethod: 'Cash on Delivery'
      });
    } else if (selectedPaymentMethod === 'card') {
      // Implement card payment logic here
      console.log('Processing card payment...');
    }
  };

  const paymentMethods = [
    {
      id: 'paypal',
      name: 'PayPal',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/free-paypal-54-675727.png',
      description: 'Pay securely with PayPal'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/free-credit-card-2650080-2196542.png',
      description: 'Pay with your credit or debit card'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: 'https://cdn-icons-png.flaticon.com/512/6491/6491511.png',
      description: 'Pay when you receive your order'
    }
  ];

  

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Order Summary Section */}
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Checkout
              </h2>

              {/* Progress Steps */}
              <div className="flex items-center mb-8">
                <div className={`flex items-center ${checkoutStep === 'address' ? 'text-blue-600' : 'text-gray-500'}`}>
                  <span className="w-8 h-8 mr-2 text-center border-2 rounded-full flex items-center justify-center font-semibold">
                    1
                  </span>
                  <span>Address</span>
                </div>
                <div className="h-0.5 w-12 bg-gray-200 mx-4"></div>
                <div className={`flex items-center ${checkoutStep === 'payment' ? 'text-blue-600' : 'text-gray-500'}`}>
                  <span className="w-8 h-8 mr-2 text-center border-2 rounded-full flex items-center justify-center font-semibold">
                    2
                  </span>
                  <span>Payment</span>
                </div>
              </div>

              <div className="mb-8">
                <CartItem cartItems={cartItems} />
              </div>

              <div className="space-y-2">
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="ml-auto text-gray-900">${subtotal}</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Tax</span>
                  <span className="ml-auto text-gray-900">${taxPrice}</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Shipping</span>
                  <span className="ml-auto text-gray-900">${shippingPrice}</span>
                </div>
                <div className="flex border-t border-b border-gray-200 py-2 font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="ml-auto text-gray-900">${total}</span>
                </div>
              </div>
            </div>

            {/* Address/Payment Section */}
            <div className="lg:w-1/3 md:w-1/2 p-8 bg-white rounded-lg shadow-sm flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              {checkoutStep === 'address' ? (
                <>
                  <h2 className="text-gray-900 text-lg mb-4 font-semibold">
                    Shipping Address
                  </h2>

                  {addressError && (
                    <p className="text-red-500 text-sm mb-4">{addressError}</p>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postalcode"
                        name="postalcode"
                        value={postalCode}
                        onChange={(e) => setpostalCode(e.target.value)}
                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <button
                      onClick={saveShippingAddress}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-gray-900 text-lg mb-4 font-semibold">
                      Payment Method
                    </h2>
                    
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Shipping to:</h3>
                      <p className="text-sm text-gray-600">{address}</p>
                      <p className="text-sm text-gray-600">{city}, {postalCode}</p>
                      <p className="text-sm text-gray-600">{country}</p>
                      <button
                        onClick={editAddress}
                        className="text-blue-600 text-sm mt-2 hover:text-blue-700"
                      >
                        Edit Address
                      </button>
                    </div>

                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedPaymentMethod === method.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                          onClick={() => handlePaymentMethodSelect(method.id)}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="payment-method"
                              checked={selectedPaymentMethod === method.id}
                              onChange={() => handlePaymentMethodSelect(method.id)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                            />
                            <img
                              src={method.icon}
                              alt={method.name}
                              className="w-8 h-8 mx-3"
                            />
                            <div>
                              <p className="font-medium text-gray-900">{method.name}</p>
                              <p className="text-sm text-gray-500">{method.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {selectedPaymentMethod === 'card' && (
                        <div className="mt-4 space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
                            <input
                              type="text"
                              placeholder="John Doe"
                              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Card Number</label>
                            <input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                              <input
                                type="text"
                                placeholder="MM/YY"
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700">CVV</label>
                              <input
                                type="text"
                                placeholder="123"
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                          <button
                            onClick={handlePlaceOrder}
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 mt-4"
                          >
                            Place Order
                          </button>
                        </div>
                      )}

                      {selectedPaymentMethod === 'paypal' && (
                        <div className="mt-4">
                          <button
                            onClick={() => {
                              // Simulate PayPal payment success
                              successPaymentHandler({
                                id: 'DEMO_' + Math.random().toString(36).substr(2, 9),
                                status: 'COMPLETED',
                                update_time: new Date().toISOString(),
                                payer: {
                                  email_address: 'demo@example.com',
                                  name: {
                                    given_name: 'John',
                                    surname: 'Doe'
                                  }
                                }
                              });
                            }}
                            className="w-full bg-[#0070ba] hover:bg-[#003087] text-white py-4 px-4 rounded-md transition duration-200 flex items-center justify-center space-x-2"
                          >
                            <img 
                              src="https://cdn.iconscout.com/icon/free/png-256/free-paypal-54-675727.png"
                              alt="PayPal"
                              className="w-5 h-5"
                            />
                            <span className="font-medium">Pay with PayPal</span>
                          </button>
                          <p className="text-sm text-gray-500 text-center mt-2">
                            (Demo Mode - Click to simulate payment)
                          </p>
                        </div>
                      )}

                      {selectedPaymentMethod === 'cod' && (
                        <button
                          onClick={handlePlaceOrder}
                          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 mt-4"
                        >
                          Place Order
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
