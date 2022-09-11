import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase-utils/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import store from "../store";

const initialSate = {
  user: null,
  userState: false,
};

const userReducer = (state = initialSate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "fetchUser": {
      return { ...state, user: payload };
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

const fetchUser = (user) => {
  return {
    type: "fetchUser",
    payload: user,
  };
};

const setState = (state) => {
  return {
    type: "userState",
    payload: state,
  };
};

const loadUserCartItems = (cartItems) => {
  return {
    type: "loadUserCartItems",
    payload: cartItems,
  };
};

const loadUserFavItems = (favItems) => {
  return {
    type: "loadFavItems",
    payload: favItems,
  };
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(fetchUser(user.uid));
    store.dispatch(setState(true));

    const fetchData = async () => {
      const ref = collection(database, "users");
      const q = query(ref, where("user", "==", user.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        store.dispatch(loadUserCartItems(doc.data().cartItems));
        store.dispatch(loadUserFavItems(doc.data().favItems));
      });
    };
    fetchData();
  }
});

export default userReducer;
