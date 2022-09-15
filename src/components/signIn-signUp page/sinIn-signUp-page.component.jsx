import { useState } from "react";
import SignUp from "../sign-up/sign-up.component";
import SignIn from "../sign-in/sign-in.component";
import Button from "../button/button.component";

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
    <div className="w-full h-screen flex items-center justify-center my-6">
      <div className="bg-white h-155 w-80 md:w-105 shadow-lg shadow-black flex flex-col items-center rounded relative">
        <div className="flex justify-end mt-3">
          <Button text="SIGN IN" response={signInHandler} />
          <Button text="SIGN UP" response={SignUpHandler} />
        </div>
        {toggleSignIn && <SignIn />}
        {toggleSignUp && <SignUp />}
      </div>
    </div>
  );
};

export default SignIn_SignUp;
