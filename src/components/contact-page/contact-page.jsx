const ContactPage = () => {
  return (
    <div className="px-10 pb-10 md:px-28 md:pt-8 my-16 flex justify-center">
      <div className="bg-zinc-200 p-4 rounded-2xl w-120">
        <form
          action=""
          name="contact"
          className="flex flex-col gap-4 -28 bg-zinc-50 rounded-xl px-5 py-10 "
          netlify
        >
          <div>
            <label className="block text-lg font-medium mb-2">Full name</label>
            <input
              className="p-3 border-2 border-zinc-300 w-full rounded-lg"
              type="text"
              name="Name: "
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              className="p-3 border-2 border-zinc-300 w-full rounded-lg"
              type="email"
              required
              name="Email: "
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">
              How can we help you?
            </label>
            <input
              className="p-3 border-2 border-zinc-300 w-full rounded-lg"
              type="text"
              name="Purpose: "
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Message</label>
            <textarea
              className="p-3 border-2 border-zinc-300 w-full rounded-lg"
              type="text"
              name="Message: "
              id=""
              cols="30"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-semibold text-lg p-3 bg-zinc-300 rounded-lg hover:bg-zinc-600 hover:text-white transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
