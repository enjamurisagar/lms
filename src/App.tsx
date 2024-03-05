import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RootLayout>
            <Home />
          </RootLayout>
        }
      />
      <Route
        path="/courses"
        element={
          <RootLayout>
            <Courses />
          </RootLayout>
        }
      />
      <Route path="*" element={"page not found"} />
    </Routes>
  );
};

export default App;
