import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-utils/config";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const navigate = useNavigate();

  const signin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return { signin };
};
