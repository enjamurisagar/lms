import { Link } from "react-router-dom";
import Button from "../Button";

//CONSTANTS
import { homeCategories } from "../../constants";

const HomeCategories = () => {
  return (
    <div className="w-full md:w-[70%] mx-auto">
      <div className="flex justify-center md:justify-between">
        <div className="flex flex-col items-center">
          <p className="h5 m-0 p-0">Top Categories</p>
          <p className="text-n-3 text-sm">Explore our Popular Categories</p>
        </div>
        {/* ALL CATS BTN */}
        <div className="hidden md:block">
          <Button className="bg-white text-black border-black border-[1px] text-[13px] md:text-sm">
            <Link to="/courses" className="text-black">
              All Categories
            </Link>
          </Button>
        </div>
      </div>
      {/* ALL CATS CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 my-10 mx-10 md:mx-0">
        {homeCategories.map((category, index) => (
          <div
            className="relative flex flex-col justify-center items-center border border-n-2 min-w-[150px] min-h-[150px] rounded-xl cursor-pointer hover:shadow-lg hover:-translate-y-3 transition ease-in-out duration-300 "
            key={index}
          >
            <img src={category.image} alt="category" width={30} height={30} />
            <span className="font-semibold my-2 text-[13px] md:text-[15px]">
              {category.name}
            </span>
            <span className="text-n-3 text-[11px] md:text-sm">
              {category.coursesCount + " courses"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
