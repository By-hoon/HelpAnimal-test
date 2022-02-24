import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Test from "./routes/Test";
import Login from "./routes/Login";
import Crew from "./routes/crew/Crew";
import CrewCreate from "./routes/crew/Create";
import CrewManagement from "./routes/crew/Management";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/crew/create" element={<CrewCreate />}></Route>
        <Route path="/crew/management/:id" element={<CrewManagement />}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
