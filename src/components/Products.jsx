/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  const categoriesData = [
    { id: 1, src: "/resources/assets/shared/desktop/image-category-thumbnail-headphones.png" },
    { id: 2, src: "/resources/assets/shared/desktop/image-category-thumbnail-speakers.png" },
    { id: 3, src: "/resources/assets/shared/desktop/image-category-thumbnail-earphones.png" },
  ];

  const uniqueCategories = new Set(data?.map((product) => product.category));
  
  

  return (
    <>
      <div
        className="grid grid-cols-1 w-screen px-8 py-4 min-h-screen gap-2 md:w-[43rem] md:grid-cols-3 md:min-h-[14rem] lg:w-[50rem] lg:py-0 lg:py-0 xl:w-[65rem]  xl2:w-[65rem]   xl2:relative xl2:left-20 2xl:left-8 2xl:w-[100rem]"
      >
        {/* Map over the unique category names */}
        {[...uniqueCategories].map((category, index) => {
          const categoryData = categoriesData?.find((item) => item.id === index + 1); 

          return (
            <div key={index} className="relative grid grid-columns-1 content-between justify-normal text-center lg:mb-[15rem] 2xl:relative 2xl:left-64">
              <div className="lg:w-80 xl:w-96">
                <img
                  src={categoryData?.src}
                  alt="category image"
                  className="relative top-10 z-50 gap-0 h-[150px] w-full object-contain md:left-[3rem] md:h-[100px] md:top-2 lg:h-[120px] lg:left-[4rem] lg:top-10 xl:h-[150px] xl:left-[5rem] xl:top-6 xl2:left-[8rem] xl2:h-[180px] 2xl:h-[280px] 2xl:left-[14rem]"
                />

                {/* Render category name and shop link */}
                <div className="absolute top-[6rem] z-40 bg-lightgray h-48 border-1 border-slate-500 bg-gray shadow-xl w-full md:h-[150px] md:w-[95%] md:top-[3rem] md:left-[3rem] text-center lg:h-[170px]  lg:top-[5rem] lg:left-[7.5rem]
                 xl:top-[5rem] xl:w-[98%] xl:h-[150px] xl2:h-[220px] 2xl:h-[280px] 2xl:left-[10rem] 2xl:top-[9rem]">
                  <div className="mt-24 md:mt-20 lg:mt-20 xl:mt-20 xl2:mt-28 2xl:mt-32">
                    <p className="font-bold text-xl md:text-xs 2xl:text-2xl mb-4">
                      {category}
                    </p>
                    <Link to={`/category/${category}`}>
                      <small className="w-[58px] flex text-sm 2xl:text-xl m-auto items-center md:text-xs">
                        shop{" "}
                        <span className="text-center text-orange ml-2 flex top-[12rem]">
                          <FaGreaterThan size={10} />
                        </span>
                      </small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;


