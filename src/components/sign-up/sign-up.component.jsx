import { useState } from "react";

const SignUp = () => {
  const [feild, setFeild] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = (e) => {
    if (e.target.name === "name") setFeild({ ...feild, name: e.target.value });
    if (e.target.name === "email")
      setFeild({ ...feild, email: e.target.value });
    if (e.target.name === "password")
      setFeild({ ...feild, password: e.target.value });

    if (e.target.name === "confirm-password")
      setFeild({ ...feild, confirmPassword: e.target.value });

    console.log(feild);
  };

  return (
    <div className="flex flex-col gap-3 absolute bottom-14">
      <div className="mt-7">
        <button className="bg-[#937dc2] w-64 h-10 rounded-xl font-bold text-white md:w-80 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#937dc2] hover:to-[#c689c6] hover:text-white">
          Sign up with Google
        </button>
      </div>

      <div className="flex items-center">
        <span className="w-28 h-1 md:w-36 border-b-2 inline-block"></span>
        <span className="px-1 font-medium">or</span>
        <span className="w-28 h-1 md:w-36 border-b-2 inline-block"></span>
      </div>

      <div className="w-64 h-90 md:w-80">
        <form>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              onChange={handleSignUp}
              className="shadow appearance-none border-b rounded w-64 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Name"
              required
            ></input>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              onChange={handleSignUp}
              className="shadow appearance-none border-b rounded w-64 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              required
            ></input>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              onChange={handleSignUp}
              className="shadow appearance-none border-b rounded w-64 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
              required
            ></input>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              onChange={handleSignUp}
              className="shadow appearance-none border-b rounded w-64 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="confirm-password"
              type="password"
              placeholder="Confirm Password"
              required
            ></input>
          </div>

          <div className="flex justify-center">
            <button className="m-4 w-20 h-10 border font-bold text-[#937dc2] rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-[#937dc2] hover:to-[#c689c6] hover:text-white">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
