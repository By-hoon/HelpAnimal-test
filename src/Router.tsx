import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Test from "./routes/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
