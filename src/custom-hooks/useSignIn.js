import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-utils/config";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const signin = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");

      if (!res) {
        throw new Error("Could not complete signup");
      }
    } catch (err) {
      setErr(err.message);
    }
  };
  return { signin, err };
};
