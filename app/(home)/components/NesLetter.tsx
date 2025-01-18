import React from 'react';

const NesLetter = () => {
  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:mt-8">
              Subscribe to our newsletter &amp; get the latest updates
            </h2>
          </div>
          <form

            className="flex flex-col justify-between max-w-lg mx-auto mt-12 rounded-full sm:items-center sm:border sm:border-gray-700 sm:p-1 sm:flex-row sm:mt-16 sm:focus-within:border-[#001968] sm:focus-within:ring-1 sm:focus-within:ring-[#001968]"
          >
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">
                {" "}
                Email address{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="block w-full px-6 py-4 text-base font-normal  placeholder-gray-400 bg-transparent border border-gray-700 rounded-full focus:outline-none sm:border-transparent focus:border-[#001968] focus:ring-1 focus:ring-[#001968] sm:focus:ring-0 sm:focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-6 py-4 mt-4 font-medium transition-all duration-200 border border-transparent rounded-full sm:mt-0 sm:w-auto bg-[#001968] text-white dark:bg-white dark:text-gray-900 dark:hover:bg-slate-100 shadow-none whitespace-normal text-sm hover:shadow-xl"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default NesLetter;
