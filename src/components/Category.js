import React from "react";

const Category = () => {
  return (
    <div className="w-[850px] h-[150px] bg-bodyColor flex items-center justify-start">
      <div className="w-1/6 h-full">
        <p className="categoryP">Personal</p>
        <p className="categoryP">Business</p>
        <p className="categoryP">Others</p>
      </div>
      <div className="w-5/6">
        <p className="text-green-500 text-center font-medium tracking-wide">
          Click on the tab to choose your todos category
        </p>
      </div>
    </div>
  );
};

export default Category;
