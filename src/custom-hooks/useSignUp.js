import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase-utils/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const signup = async (email, password, displayName) => {
    setErr(null);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
      });

      navigate("/");
      if (!res) {
        throw new Error("Could not complete signup");
      }
      setErr(null);
    } catch (err) {
      setErr(err.message);
    }
  };

  return { err, signup };
};
