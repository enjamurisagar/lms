type FeaturedCoursesCardType = {
  image?: string;
  by?: string;
  title?: string;
  duration?: number;
  students?: number;
  actualPrice?: number;
  price?: number;
};

import { RiGraduationCapFill } from "react-icons/ri";
import { RiTimerLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const FeaturedCoursesCard = ({
  image,
  by,
  title,
  duration,
  students,
  actualPrice,
  price,
}: FeaturedCoursesCardType) => {
  return (
    <div className="w-full h-auto rounded-2xl relative hover:-translate-y-2 transition ease-in-out duration-300 hover:shadow-xl">
      {/* IMAGE */}
      <div className="w-full h-[200px] ">
        <img src={image} alt="course" className="w-full h-[200px]" />
      </div>
      {/* CONTENT */}
      <div className="border border-n-2 p-3 rounded-xl rounded-tl-none rounded-tr-none">
        <div className="mb-2">
          <span className="text-n-3 text-[13px] ">
            by <span className="text-black/70">{by}</span>
          </span>
        </div>
        <div className="title mb-2">
          <span className="h6">{title}</span>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="flex items-center gap-1">
            <RiTimerLine size={15} className="text-default" />
            <span className="text-[11px] ">{duration + " Weeks"} </span>
          </div>
          <div className="flex items-center gap-1">
            <RiGraduationCapFill size={15} className="text-default" />
            <span className="text-[11px]">{students + " Students"} </span>
          </div>
        </div>
        {/* DIVIDER */}
        <div className="w-[95%] mx-auto h-[1px] bg-n-2 my-5" />
        {/* PRICE AND VIEW MORE */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span className="line-through text-sm text-n-3">
              ${actualPrice}
            </span>
            {price === 0 ? (
              <span className="text-success text-sm font-semibold">Free</span>
            ) : (
              <span className="text-sm text-danger font-semibold">
                ${price}
              </span>
            )}
          </div>
          <Link to="/courses" className="text-sm font-light">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCoursesCard;
