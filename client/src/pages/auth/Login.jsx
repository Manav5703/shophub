import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layouts/Layouts";
import { userLoginAction } from "../../Redux/Actions/User";
import { useState } from "react";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const userLoginReducer = useSelector((state) => state.userLoginReducer);

  const { loading, error } = userLoginReducer;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(identifier, password));
  };
  return (
    <>
      <Layout>
        <div className="max-w-sm mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {loading ? (
            <Loading />
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          ) : (
            <>
              <form className="space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="identifier"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username or Email
                  </label>
                  <input
                    type="text"
                    id="identifier"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your username or email"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
              </form>
              <p className="mt-4 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                  Register here
                </Link>
              </p>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
