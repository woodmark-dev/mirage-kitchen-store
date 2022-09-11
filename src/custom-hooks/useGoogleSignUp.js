import { useNavigate } from "react-router-dom";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase-utils/config";

const provider = new GoogleAuthProvider();

export const useGoogleSignUp = () => {
  const navigate = useNavigate();
  const googleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return { googleSignUp };
};
