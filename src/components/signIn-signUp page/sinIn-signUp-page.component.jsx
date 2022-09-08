import { useState } from "react";
import SignUp from "../sign-up/sign-up.component";
import SignIn from "../sign-in/sign-in.component";

const SignIn_SignUp = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true);
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const signInHandler = () => {
    setToggleSignUp(false);
    setToggleSignIn(true);
  };

  const SignUpHandler = () => {
    setToggleSignIn(false);
    setToggleSignUp(true);
  };
  return (
    <div className="bg-gradient-to-r from-[#937dc2] to-[#c689c6] w-full h-screen flex items-center justify-center">
      <div className="bg-[#fff] h-155 w-80 md:w-105 shadow-lg shadow-black flex flex-col items-center rounded relative">
        <div className="flex justify-end mt-3">
          <button
            onClick={signInHandler}
            className="m-4 w-20 h-10 border font-bold text-[#937dc2] rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-[#937dc2] hover:to-[#c689c6] hover:text-white focus:bg-gradient-to-r focus:from-[#937dc2] focus:to-[#c689c6] focus:text-white"
          >
            SIGN IN
          </button>
          <button
            onClick={SignUpHandler}
            className="m-4 w-20 h-10 border font-bold text-[#937dc2] rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-[#937dc2] hover:to-[#c689c6] hover:text-white focus:bg-gradient-to-r focus:from-[#937dc2] focus:to-[#c689c6] focus:text-white"
          >
            SIGN UP
          </button>
        </div>

        {toggleSignIn && <SignIn />}

        {toggleSignUp && <SignUp />}
      </div>
    </div>
  );
};

export default SignIn_SignUp;
