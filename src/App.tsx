import React, { lazy, Suspense } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Store = lazy(() => import("./pages/store"));
const Todos = lazy(() => import("./pages/todos"));
const About = lazy(() => import("./pages/about"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/todo" element={<Todos />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </Routes>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
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
