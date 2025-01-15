const Resource = ({ resource }: { resource: any }) => {
  return (
    <section className="py-6">
      <div>
        <div className="mx-auto text-left">
          <h2 className="text-xl font-bold leading-tight md:text-3xl">
            Latest from {resource.name}
          </h2>
        </div>
        <div className="grid max-w-md grid-cols-1 mx-auto mt-6 lg:max-w-full lg:mt-10 lg:grid-cols-3 gap-x-16 gap-y-6">
          <div>
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg"
                alt=""
              />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
              Technology{" "}
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="#" title="" className="">
                {" "}
                How to mange your remote team?{" "}
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed" />
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {" "}
              Martin Jones . June 12, 2021{" "}
            </span>
          </div>
          <div>
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg"
                alt=""
              />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
              {" "}
              Marketing{" "}
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="#" title="" className="">
                {" "}
                6 Product launching emails you want to use on next campaign.{" "}
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed" />
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {" "}
              Martin Jones . June 12, 2021{" "}
            </span>
          </div>
          <div>
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg"
                alt=""
              />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
              {" "}
              Marketing{" "}
            </span>
            <p className="mt-6 text-xl font-semibold">
              <a href="#" title="" className="">
                {" "}
                Learn from the best: 7 email marketing ideas you can use{" "}
              </a>
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed" />
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              {" "}
              Martin Jones . June 12, 2021{" "}
            </span>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Resource;
