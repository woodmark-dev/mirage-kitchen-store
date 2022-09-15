import { useReducer } from "react";
import { useSignIn } from "../../custom-hooks/useSignIn";
import { useGoogleSignUp } from "../../custom-hooks/useGoogleSignUp";
import Button from "../button/button.component";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "email":
      return { ...state, email: payload };
    case "password":
      return { ...state, password: payload };
    default:
      return state;
  }
};

const SignIn = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { signin, err } = useSignIn();
  const { googleSignUp, erro } = useGoogleSignUp();

  const handleSignIn = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = state;
    signin(email, password);
  };

  const handleGoogleSignin = () => {
    googleSignUp();
  };

  return (
    <div className="flex flex-col gap-8 absolute bottom-0">
      <div className="mt-7">
        <button
          onClick={handleGoogleSignin}
          className="bg-blue-500 w-64 h-10 rounded-xl font-bold text-white md:w-80 transition-all duration-500 hover:bg-blue-600"
        >
          Sign in with Google
        </button>
        {erro && (
          <p className="flex flex-col justify-center items-center">
            Could not sign up <br /> {erro}
          </p>
        )}
      </div>

      <div className="flex items-center">
        <span className="w-28 h-1 md:w-36 border-b-2 inline-block"></span>
        <span className="px-1 font-medium">or</span>
        <span className="w-28 h-1 md:w-36 border-b-2 inline-block"></span>
      </div>

      <div className="w-64 h-85 md:w-80">
        <form onSubmit={submitHandler}>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              onChange={handleSignIn}
              className="shadow appearance-none border-b rounded w-64 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              onChange={handleSignIn}
              className="shadow appearance-none border-b rounded w-64 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
              required
            ></input>
          </div>

          <div className="flex justify-center">
            <Button text="SUBMIT" />
          </div>
          {err && <p>{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
