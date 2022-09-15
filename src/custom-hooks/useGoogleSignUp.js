import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase-utils/config";

const provider = new GoogleAuthProvider();

export const useGoogleSignUp = () => {
  const [erro, setErr] = useState(null);
  const navigate = useNavigate();

  const googleSignUp = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      navigate("/");

      if (!res) {
        throw new Error("Could not complete signup");
      }
      setErr(null);
    } catch (err) {
      setErr(err.message);
    }
  };

  return { googleSignUp, erro };
};
