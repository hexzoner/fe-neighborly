import { useContext, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyPosts from "./components/MyPosts";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
import { AuthProvider, AuthContext } from "./components/AuthContext";
import Signup from "./components/Signup";

const MainLayout = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
      <Footer />
    </>
  );
};

const Protected = () => {
  const { userInfo, loading } = useContext(AuthContext);
  return <>{userInfo ? <Outlet /> : <Navigate to="/login" />}</>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/" element={<Protected />}>
        <Route path="myposts" element={<MyPosts />} />
      </Route>
      <Route path="posts/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
