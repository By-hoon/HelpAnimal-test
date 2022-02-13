import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Test from "./routes/Test";
import Login from "./routes/Login";
import Crew from "./routes/Crew";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
