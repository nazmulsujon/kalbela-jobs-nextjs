

const Customer = () => {
  return (
    <section className="pb-10 sm:py-16 lg:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                alt=""
              />
            </div>
            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                alt=""
              />
            </div>
            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                alt=""
              />
            </div>
          </div>
          <h2 className="mt-8 text-3xl font-bold leading-tight  lg:mt-12 sm:text-4xl lg:text-5xl">
            Join <span className="border-b-8 border-[#001968]">5,482</span> other Candidates
          </h2>

        </div>
      </div>
    </section>

  );
};

export default Customer;
