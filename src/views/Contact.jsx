import React from "react";

const Contact = () => {
  return (
    <>
      <form className="w-full max-w-lg mx-auto mb-[100px]">
        <h1 className="text-#1F2937 text-4xl mt-[60px] mb-16 font-semibold">Biz haqimizda sizning fikringiz</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              for="grid-password"
            >
              Ismingiz
            </label>
            <input
              className="appearance-none block transition-all w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nick"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none transition-all block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              for="grid-password"
            >
              Fikr-mulohazalaringizni shu yerga qoldiring...
            </label>
            <textarea
              className="transition-all no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-[#1F2937] hover:bg-[#314155] transition-colors focus:shadow-outline focus:outline-none text-white font-bold py-3 px-10 rounded"
              type="button"
            >
              Jo'natish
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
