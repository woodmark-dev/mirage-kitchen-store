import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase-utils/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import store from "../store";

import {
  fetchUser,
  setState,
  loadUserCartItems,
  loadUserFavItems,
  fetchDisplayName,
} from "../../components/redux-functions/redex-functions";

const initialSate = {
  user: null,
  userState: false,
  displayName: null,
};

const userReducer = (state = initialSate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "fetchUser": {
      return { ...state, user: payload };
    }
    case "displayName": {
      return {
        ...state,
        displayName: payload,
      };
    }
    case "userState": {
      return { ...state, userState: payload };
    }

    case "resetUser": {
      return { ...state, user: null };
    }

    default:
      return state;
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    const fetchData = async () => {
      const ref = collection(database, "users");
      const q = query(ref, where("user", "==", user.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        store.dispatch(loadUserCartItems(doc.data().cartItems));
        store.dispatch(loadUserFavItems(doc.data().favItems));
        store.dispatch(fetchUser(user.uid));
        store.dispatch(setState(true));
        store.dispatch(fetchDisplayName(user.displayName));
      });
    };

    fetchData();
  }
});

export default userReducer;
