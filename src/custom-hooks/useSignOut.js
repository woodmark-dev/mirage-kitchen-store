import { signOut } from "firebase/auth";
import { auth } from "../firebase-utils/config";
import { useNavigate } from "react-router-dom";

export const useSignOut = () => {
  const navigate = useNavigate();

  const signout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return { signout };
};
