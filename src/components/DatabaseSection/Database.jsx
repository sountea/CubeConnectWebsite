import React from "react";
import { DATABASE } from "../../utilities/database";

const Database = () => {
  console.log(DATABASE.length);
  return (
    <div className=" py-24 sm:py-32">
      <h5 className="text-white text-center mb-10 text-4xl font-semibold text-center md:text-6xl  ">
        Base de données et évolution
      </h5>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl ">
          <div className="mt-16 space-y-20 w-full lg:mt-20 lg:space-y-20 ">
            {DATABASE.map((post) => {
              console.log(post);
              return (
                <article
                  key={post.id}
                  className=" flex flex-col gap-8 justify-between lg:flex-row"
                >
                  <div className="w-5/12  max-[640px]:w-72">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className=" h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="cursor-default max-w-xl">
                      <h3 className="mt-3 text-2xl font-semibold leading-6 text-red-500 hover:text-red-700">
                        {post.title}
                      </h3>
                      <p className="mt-5 text-lg leading-6 text-white font-bold max[640px]:text-xs">
                        {post.Description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Database;
