import React from 'react';

const NesLetter = () => {
      return (
            <section className=" py-6 md:py-10">
                  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="relative mx-auto overflow-hidden bg-light-theme dark:bg-dark-theme shadow border-2 max-w-7xl rounded-3xl">
                              <div className="absolute top-0 left-0">
                                    <img
                                          className="w-16 md:w-24 lg:w-32 xl:w-full"
                                          src="https://landingfoliocom.imgix.net/store/collection/saasui/images/newsletter/3/ring-pattern.svg"
                                          alt=""
                                    />
                              </div>
                              <div className="relative px-8 py-12 md:p-16 xl:p-24">
                                    <div className="max-w-2xl mx-auto text-center">
                                          <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                                                Subscribe to our newsletter
                                          </h2>
                                          {/* <p className="mt-4 text-base font-normal leading-7 text-slate-400 dark:text-slate-200 lg:text-lg lg:mt-6 lg:leading-8">
                                                Stay up to date with our new collections, latest deals and special
                                                offers! We announce a new job collection every week so be sure to stay
                                                tuned.
                                          </p> */}
                                    </div>
                                    <form
                                          className="flex flex-col max-w-3xl mx-auto mt-12 space-y-4 xl:mt-16 md:flex-row md:space-y-0 md:space-x-4"
                                    >
                                          <div className="flex-1">
                                                <label htmlFor="" className="sr-only">
                                                      Full Name
                                                </label>
                                                <input
                                                      type="text"
                                                      name="full-name"
                                                      id=""
                                                      placeholder="Full name"
                                                      className="block w-full placeholder:text-black placeholder:dark:text-white px-4 py-4 text-base font-normal dark:text-white text-black placeholder-white bg-transparent border border-opacity-50 dark:border-white border-slate-400 rounded-xl focus:ring-1 focus:ring-white  focus:bg-white/10 focus:outline-none"
                                                />
                                          </div>
                                          <div className="flex-1">
                                                <label htmlFor="" className="sr-only">

                                                      Email address{" "}
                                                </label>
                                                <input
                                                      type="email"
                                                      name=""
                                                      id=""
                                                      placeholder="Email address"
                                                      className="block w-full placeholder:text-black placeholder:dark:text-white px-4 py-4 text-base font-normal dark:text-white text-black placeholder-white bg-transparent border border-opacity-50 dark:border-white border-slate-400 rounded-xl focus:ring-1 focus:ring-white  focus:bg-white/10 focus:outline-none"
                                                />
                                          </div>
                                          <button
                                                type="submit"
                                                className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-blue-600"
                                          >
                                                Subscribe Now
                                          </button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </section>

      );
};

export default NesLetter;
