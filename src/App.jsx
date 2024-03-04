import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import PrivateRoot from "./services/PrivateRoot";
import Layout from "./layout/Layout";
import About from "./views/About";
import Users from "./views/Users";
import Dashboard from "./views/Dashboard";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import PrivateAdminRoot from "./services/PrivateAdminRoot";
import UsersLayout from "./layout/UsersLayout";
import Order from "./views/Order";
import Furniture from "./views/Furniture";
import Contact from "./views/Contact";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<PrivateAdminRoot />}>
            <Route path="/admin" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Route>
          <Route element={<PrivateRoot />}>
            <Route path="/" element={<UsersLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="furnitures" element={<Furniture />} />
              <Route path="order" element={<Order />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
