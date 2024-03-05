import { Link } from "react-router-dom";
import homeMain from "../../assets/homeMain.png";

const HomeHero = () => {
  return (
    <div className="relative w-full  object-contain mb-5 md:mb-10">
      <img
        src={homeMain}
        alt="home image"
        width="100%"
        height="100%"
        className="object-cover"
      />
      <div className="relative md:absolute left-0 md:left-[10%] top-0 md:top-[30%] flex flex-col justify-center ">
        <p className="text-center md:text-left max-w-full md:max-w-[250px] text-[22px] md:h4 leading-tight font-bold mb-2 mt-4 lg:mt-4 ">
          Build Skills with Online Course
        </p>
        <span className="text-center md:text-left text-[13px] md:text-sm max-w-[80%] mx-auto md:max-w-[400px] mb-3 text-n-4">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized that cannot trouble.
        </span>
        <span className="w-full flex justify-center md:justify-start">
          <Link
            to="/blog"
            className="px-4 py-2 text-sm bg-default text-white rounded-3xl"
          >
            Posts Comment
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HomeHero;
