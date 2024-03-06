import { Link } from "react-router-dom";
import banner from "../../assets/home/banner.png";
import banner2 from "../../assets/home/banner2.png";
import HomeBanner from "../../assets/home/homeBanner.png";
import Button from "../Button";
import { TiTick } from "react-icons/ti";
const Banner = () => {
  return (
    <section className="w-[95%] h-full md:w-[70%] mx-auto mb-10">
      <div className="w-full relative mb-15">
        <img
          src={banner}
          alt="banner"
          width="200%"
          height={100}
          className="hidden lg:block"
        />
        <div className="static lg:absolute  left-0 lg:left-[8%] top-0 lg:top-[16%] text-center lg:text-left">
          <p className="uppercase text-[13px] font-medium mb-2">
            get more power from
          </p>
          <p className="text-[20px] font-semibold mb-4">LearnPress Add-Ons</p>
          <p className="caption max-w-full lg:max-w-[300px] mb-4">
            The next level of LearnPress - LMS WordPress Plugin. More Powerful,
            Flexible and Magical Inside.
          </p>
          <Button>
            <Link to="/courses">Explore Courses</Link>
          </Button>
        </div>
      </div>
      {/* 4 BOXES */}
      <div className="w-full min-h-[150px] flex flex-wrap justify-center gap-10 md:gap-0 mb-10">
        <div className="w-[75%] h-[150px]  md:w-[23%] bg-n-1 rounded-xl flex flex-col items-center justify-center mx-auto hover:border hover:border-n-3">
          <p className="text-[20px] mb-3 text-default font-semibold">25K+</p>
          <p className="text-[13px] font-[550]">Active Students</p>
        </div>
        <div className="w-[75%] h-[150px]  md:w-[23%] bg-n-1 rounded-xl flex flex-col items-center justify-center mx-auto hover:border hover:border-n-3">
          <p className="text-[20px] mb-3 text-default font-semibold">899</p>
          <p className="text-[13px] font-[550]">Total Courses</p>
        </div>
        <div className="w-[75%] h-[150px]  md:w-[23%] bg-n-1 rounded-xl flex flex-col items-center justify-center mx-auto hover:border hover:border-n-3">
          <p className="text-[20px] mb-3 text-default font-semibold">158</p>
          <p className="text-[13px] font-[550]">Instructors</p>
        </div>
        <div className="w-[75%] h-[150px]  md:w-[23%] bg-n-1 rounded-xl flex flex-col items-center justify-center mx-auto hover:border hover:border-n-3">
          <p className="text-[20px] mb-3 text-default font-semibold">100%</p>
          <p className="text-[13px] font-[550]">Satisfaction rate</p>
        </div>
      </div>
      {/* ANOTHER LEFT IMG AND RIGHT CONTENT */}
      <div className="w-full flex flex-col md:flex-row gap-5  mb-10">
        {/* image */}
        <div className="w-[90%] md:w-[50%] mx-auto">
          <img src={HomeBanner} alt="home" />
        </div>
        {/* right content */}
        <div className="w-[90%] md:w-[50%] mx-auto  p-2 mt-5 md:pl-4 ">
          <p className="h5 font-semibold mb-4">
            Grow us your skill <br /> with LearnPress LMS
          </p>
          <p className="caption text-n-3 mb-4">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <p className="text-sm flex gap-1 my-2 items-center">
            <TiTick className="text-success" size={15} /> Certification
          </p>
          <p className="text-sm flex gap-1 my-2 items-center">
            <TiTick className="text-success" size={15} /> Certification
          </p>
          <p className="text-sm flex gap-1 my-2 items-center">
            <TiTick className="text-success" size={15} /> Certification
          </p>
          <p className="text-sm flex gap-1 my-2 items-center">
            <TiTick className="text-success" size={15} /> Certification
          </p>
          <p className="text-sm flex gap-1 my-2 items-center mb-4">
            <TiTick className="text-success" size={15} /> Certification
          </p>
          <Button>
            <span>Explore Courses</span>
          </Button>
        </div>
      </div>
      {/* BANNER 2 */}
      <div className="relative">
        <div className="img mb-5 md:m-0">
          <img src={banner2} alt="home banner" />
        </div>
        <div className="static md:absolute top-[20%] left-[30%] w-[95%] mx-auto md:w-[40%] ">
          <p className="text-sm font-medium mb-1 uppercase text-center">
            Providing amazing
          </p>
          <p className="text-[20px] text-center mb-3  md:mb-5 capitalize font-bold">
            education wordpress theme
          </p>
          <p className="text-black/50 text-[13px] text-center mb-3">
            The next level of LMS WordPress Theme. Learn anytime and anywhere.
          </p>
          <div className="flex justify-center">
            <Button>Explore Courses</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
