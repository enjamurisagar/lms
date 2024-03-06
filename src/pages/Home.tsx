import Banner from "../components/Home/Banner";
import FeaturedCourses from "../components/Home/FeaturedCourses";
import HomeCategories from "../components/Home/HomeCategories";
import HomeHero from "../components/Home/HomeHero";
import StudentsFeedback from "../components/Home/StudentsFeedback";

const Home = () => {
  return (
    <div className="">
      <HomeHero />
      <HomeCategories />
      <FeaturedCourses />
      <Banner />
      <StudentsFeedback />
    </div>
  );
};

export default Home;
