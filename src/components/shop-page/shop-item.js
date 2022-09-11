import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ShopItem = ({ item }) => {
  const storeItems = useSelector((state) => state.allShopItems);
  // const all = useSelector((state) => state.userData.cartItems);
  const dispatch = useDispatch();

  // console.log(all);

  const addToCart = (allItems, item) => {
    return {
      type: "cartItem/add",
      payload: { allItems, item },
    };
  };

  const addRemoveFav = (allItems, item) => {
    return {
      type: "favItem/add/remove",
      payload: { allItems, item },
    };
  };

  const addToFavHandler = (storeItems, item) => {
    dispatch(addRemoveFav(storeItems, item));
  };

  const { imgUrl, name } = item;
  return (
    <div>
      <div className="relative flex items-center justify-center bg-zinc-100 overflow-hidden p-10 h-80">
        <div className="z-10 w-36">
          <img src={imgUrl} alt={name} />
        </div>

        <div className="w-[90%] h-[120%] bg-zinc-200 absolute rounded-full"></div>
        <div className="w-[70%] h-[90%] bg-zinc-50 absolute rounded-full"></div>

        <div
          onClick={() => addToFavHandler(storeItems, item)}
          className="absolute z-10 top-0 right-2 cursor-pointer"
        >
          <p className="text-3xl text-white bg-black rounded w-8 h-8 flex justify-center items-center">
            &hearts;
          </p>
        </div>
      </div>
      <button
        onClick={() => dispatch(addToCart(storeItems, item))}
        className="font-medium p-2 border-2 border-zinc-200 bg-zinc-200 rounded-lg mt-3 w-full text-center"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ShopItem;

// import { onAuthStateChanged } from "firebase/auth";
// import { auth, database } from "../../firebase-utils/config";
// import { doc, setDoc } from "firebase/firestore";

// const fun = (cartItems) => {
//   onAuthStateChanged(auth, (user) => {
//     if (!user) return;
//     const setCartItems = async (user, items) => {
//       await setDoc(doc(database, "users", user.uid), {
//         cartItems: [...items],
//         hey: "Hello",
//         user: user.uid,
//       });
//     };

//     setCartItems(user, cartItems);
//   });
// };
