const Button = ({ text, response }) => {
  return (
    <button
      onClick={response}
      className="m-4 w-20 h-10 border font-bold text-white bg-zinc-700 rounded-lg transition-all duration-500 hover:text-black hover:bg-white"
    >
      {text}
    </button>
  );
};

export default Button;
