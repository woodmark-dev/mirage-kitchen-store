import { useNavigate } from "react-router-dom";

import store from "../../redux/store";
import { togglePopup } from "../redux-functions/redex-functions";

const PopUp = () => {
  let navigate = useNavigate();
  const goToSignInHandler = () => {
    store.dispatch(togglePopup());
    navigate(`/favorites`);
  };

  const closePopupHandler = () => {
    store.dispatch(togglePopup());
  };

  return (
    <div className="h-screen w-full flex justify-center items-center rounded-lg top-0 fixed z-50 backdrop-blur-lg">
      <div className="bg-slate-50 h-80 w-140 flex flex-col justify-center items-center rounded-lg relative">
        <div
          onClick={closePopupHandler}
          className="text-5xl cursor-pointer absolute top-0 right-6"
        >
          &times;
        </div>
        <div className="flex items-center justify-center flex-col gap-6">
          <p className="font-bold text-lg">
            Sign in to see or add favorite items
          </p>
          <button
            onClick={goToSignInHandler}
            className="w-36 h-10 bg-black text-white rounded-xl border-2 border-black hover:bg-white hover:text-black"
          >
            Go to sign in page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
