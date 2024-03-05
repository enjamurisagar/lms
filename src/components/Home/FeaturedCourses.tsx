import { Link } from "react-router-dom";
import Button from "../Button";
import FeaturedCoursesCard from "./FeaturedCoursesCard";
import coursesImage from "../../assets/home/course1.png";

const FeaturedCourses = () => {
  return (
    <section className="w-full md:w-[70%] mx-auto">
      {/* TOP */}
      <div className="flex  justify-center md:justify-between">
        <div className="flex flex-col items-center justify-center">
          <span className="h5 m-0 p-0">Featured Courses</span>
          <p className="text-n-3 text-sm">Explore our Popular Courses</p>
        </div>
        <div className="hidden md:block">
          <Button className="bg-white text-black border-black border-[1px] text-[13px] md:text-sm">
            <Link to="/courses" className="text-black">
              All Courses
            </Link>
          </Button>
        </div>
      </div>
      {/* ALL CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10 mx-10 md:mx-0">
        <FeaturedCoursesCard
          image={coursesImage}
          by="Determined-Poitras"
          title="Create an LMS Website with Wordpress"
          duration={2}
          students={156}
          actualPrice={29}
          price={0}
        />
        <FeaturedCoursesCard
          image={coursesImage}
          by="Determined-Poitras"
          title="Create an LMS Website with Wordpress"
          duration={2}
          students={156}
          actualPrice={29}
          price={0}
        />
        <FeaturedCoursesCard
          image={coursesImage}
          by="Determined-Poitras"
          title="Create an LMS Website with Wordpress"
          duration={2}
          students={156}
          actualPrice={29}
          price={59}
        />
        <FeaturedCoursesCard
          image={coursesImage}
          by="Determined-Poitras"
          title="Create an LMS Website with Wordpress"
          duration={2}
          students={156}
          actualPrice={29}
          price={0}
        />
      </div>
    </section>
  );
};

export default FeaturedCourses;
