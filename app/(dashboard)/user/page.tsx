const page = () => {
  return (
    <div className="flex flex-1 flex-col overflow-x-hidden">
      <main>
        <div className="py-6">
          <div className="mx-auto px-4 sm:px-6 md:px-8">
            <div className="md:flex md:items-center">
              <p className="text-base font-bold text-gray-900">Hey Mariana -</p>
              <p className="mt-1 text-base font-medium text-gray-500 md:ml-2 md:mt-0">
                here's what's happening with your store today
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 px-4 sm:px-6 md:px-8">
            <div className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white lg:col-span-4">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="sm:flex sm:items-start sm:justify-between">
                      <div>
                        <p className="text-base font-bold text-gray-900">
                          Transactions
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipis.
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <a
                          href="#"
                          title=""
                          className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-gray-900"
                        >
                          See all Transactions
                          <svg
                            className="ml-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="grid grid-cols-3 gap-y-4 py-4 lg:grid-cols-6 lg:gap-0">
                      <div className="col-span-2 px-4 sm:px-6 lg:col-span-1 lg:py-4">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-900">
                          <svg
                            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          Selected
                        </span>
                      </div>
                      <div className="px-4 text-right sm:px-6 lg:order-last lg:py-4">
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition-all duration-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="px-4 sm:px-6 lg:col-span-2 lg:py-4">
                        <p className="text-sm font-bold text-gray-900">
                          Visa card **** 4831
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Card payment
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 lg:py-4">
                        <p className="text-sm font-bold text-gray-900">
                          $182.94
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Jan 17, 2022
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 lg:py-4">
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Amazon
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-y-4 py-4 lg:grid-cols-6 lg:gap-0">
                      <div className="col-span-2 px-4 sm:px-6 lg:col-span-1 lg:py-4">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-900">
                          <svg
                            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          Shortlist
                        </span>
                      </div>
                      <div className="px-4 text-right sm:px-6 lg:order-last lg:py-4">
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition-all duration-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="px-4 sm:px-6 lg:col-span-2 lg:py-4">
                        <p className="text-sm font-bold text-gray-900">
                          Mastercard **** 6442
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Card payment
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 lg:py-4">
                        <p className="text-sm font-bold text-gray-900">
                          $99.00
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Jan 17, 2022
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 lg:py-4">
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Facebook
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-y-4 py-4 lg:grid-cols-6 lg:gap-0">
                      <div className="col-span-2 px-4 sm:px-6 lg:col-span-1 lg:py-4">
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-900">
                          <svg
                            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          Pending
                        </span>
                      </div>
                      <div className="px-4 text-right sm:px-6 lg:order-last lg:py-4">
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition-all duration-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="px-4 sm:px-6 lg:col-span-2 lg:py-4">
                        <p className="text-sm font-bold text-gray-900">
                          Account ****882
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Bank payment
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 lg:py-4">
                        <p className="text-sm font-bold text-gray-900">
                          $249.94
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Jan 17, 2022
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 lg:py-4">
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Netflix
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-y-4 py-4 lg:grid-cols-6 lg:gap-0">
                      <div className="col-span-2 px-4 sm:px-6 lg:col-span-1 lg:py-4">
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-900">
                          <svg
                            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          Rejected
                        </span>
                      </div>
                      <div className="px-4 text-right sm:px-6 lg:order-last lg:py-4">
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition-all duration-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="px-4 sm:px-6 lg:col-span-2 lg:py-4">
                        <p className="text-sm font-bold text-gray-900">
                          Amex card **** 5666
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Card payment
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 lg:py-4">
                        <p className="text-sm font-bold text-gray-900">
                          $199.24
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Jan 17, 2022
                        </p>
                      </div>
                      <div className="px-4 sm:px-6 lg:py-4">
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          Amazon Prime
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white lg:col-span-2">
                  <div className="px-4 py-5 sm:p-6">
                    <div>
                      <p className="text-base font-bold text-gray-900">
                        Recent Customers
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-500">
                        Lorem ipsum dolor sit ametis.
                      </p>
                    </div>
                    <div className="mt-8 space-y-6">
                      <div className="flex items-center justify-between space-x-5">
                        <div className="flex min-w-0 flex-1 items-center">
                          <img
                            className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male.png"
                            alt=""
                          />
                          <div className="ml-4 min-w-0 flex-1">
                            <p className="text-sm font-bold text-gray-900">
                              Jenny Wilson
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                              w.lawson@example.com
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            $11,234
                          </p>
                          <p className="mt-1 truncate text-sm font-medium text-gray-500">
                            Austin
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between space-x-5">
                        <div className="flex min-w-0 flex-1 items-center">
                          <img
                            className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male-2.png"
                            alt=""
                          />
                          <div className="ml-4 min-w-0 flex-1">
                            <p className="text-sm font-bold text-gray-900">
                              Devon Lane
                            </p>
                            <p className="mt-1 truncate text-sm font-medium text-gray-500">
                              dat.roberts@example.com
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <p className="text-sm font-medium text-gray-900">
                            $11,159
                          </p>
                          <p className="mt-1 truncate text-sm font-medium text-gray-500">
                            New York
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between space-x-5">
                        <div className="flex min-w-0 flex-1 items-center">
                          <img
                            className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-female-2.png"
                            alt=""
                          />
                          <div className="ml-4 min-w-0 flex-1">
                            <p className="text-sm font-bold text-gray-900">
                              Jane Cooper
                            </p>
                            <p className="mt-1 truncate text-sm font-medium text-gray-500">
                              jgraham@example.com
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            $10,483
                          </p>
                          <p className="mt-1 text-sm font-medium text-gray-500">
                            Toledo
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between space-x-5">
                        <div className="flex min-w-0 flex-1 items-center">
                          <img
                            className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male-3.png"
                            alt=""
                          />
                          <div className="ml-4 min-w-0 flex-1">
                            <p className="text-sm font-bold text-gray-900">
                              Dianne Russell
                            </p>
                            <p className="mt-1 truncate text-sm font-medium text-gray-500">
                              curtis.d@example.com
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            $9,084
                          </p>
                          <p className="mt-1 text-sm font-medium text-gray-500">
                            Naperville
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#"
                        title=""
                        className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-gray-900"
                      >
                        See all Customers
                        <svg
                          className="ml-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
