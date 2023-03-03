import React, { lazy, Suspense } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/home"));
const Posts = lazy(() => import("./pages/posts"));
const Todos = lazy(() => import("./pages/todos"));
const About = lazy(() => import("./pages/about"));

function App() {
  return (
    <div className={"app"}>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/todo" element={<Todos />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
