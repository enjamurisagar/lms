import Footer from "../components/Footer";
import Header from "../components/Header";
import { RootLayoutType } from "../types";

const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col font-madimi">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
