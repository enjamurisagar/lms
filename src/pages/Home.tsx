import FeaturedCourses from "../components/Home/FeaturedCourses";
import HomeCategories from "../components/Home/HomeCategories";
import HomeHero from "../components/Home/HomeHero";

const Home = () => {
  return (
    <div className="">
      <HomeHero />
      <HomeCategories />
      <FeaturedCourses />
    </div>
  );
};

export default Home;
