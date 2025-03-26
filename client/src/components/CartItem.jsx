import { useDispatch } from "react-redux";
import { addToCartAction, removeFromCartAction } from "../Redux/Actions/Cart";

export default function CartItem({ cartItems }) {
  const dispatch = useDispatch();
  
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCartAction(id));
  };

  const addToCartHandler = (id, qty) => {
    dispatch(addToCartAction(id, qty));
  };

  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {cartItems.map((product) => (
            <li key={product.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.image}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <span className="text-base font-medium">
                      <a href={product.href}>{product.name}</a>
                    </span>
                    <span className="ml-4">${product.price}</span>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <div className="text-gray-500 flex items-center">
                    <span>Qty</span>
                    <select
                      value={product.qty}
                      onChange={(e) =>
                        addToCartHandler(
                          product.product,
                          Number(e.target.value)
                        )
                      }
                      className="rounded ml-2 border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => removeFromCartHandler(product.product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}