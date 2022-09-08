const ContactPage = () => {
  return (
    <div className="px-10 pb-10 md:px-28 md:pt-8 my-16">
      <div className="bg-zinc-200 p-4 rounded-2xl lg:mx-24 xl:mx-36">
        <form
          action=""
          className="flex flex-col gap-4 -28 bg-zinc-50 rounded-xl px-5 py-10 md:px-12 md:py-10 xl:px-16"
        >
          <div>
            <label className="block text-lg font-medium mb-2">Full name</label>
            <input
              className="p-3 border-2 border-zinc-300 w-full rounded-lg"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              className="p-3 border-2 border-zinc-300 w-full rounded-lg"
              type="email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">
              How can we help you?
            </label>
            <input
              className="p-3 border-2 border-zinc-300 w-full rounded-lg"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Message</label>
            <textarea
              className="p-3 border-2 border-zinc-300 w-full rounded-lg"
              type="text"
              name=""
              id=""
              cols="30"
              rows="4"
              required
            ></textarea>
          </div>
          <button className="font-semibold text-lg p-3 bg-zinc-300 rounded-lg hover:bg-zinc-600 hover:text-white transition-all duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
