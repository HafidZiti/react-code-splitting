import React, { lazy, Suspense, useState, useTransition } from "react";

const AdminData = lazy(() => import("../components/admin-data"));

const Home: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h3>Home</h3>
      <button
        onClick={() => {
          import("../utils/sum").then((module) => {
            alert(module.default(2, 2));
          });
        }}
      >
        Add 2+2
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          startTransition(() => {
            setIsAdmin((prev) => !prev);
            console.log("Transition done !");
          });
        }}
      >
        Toggle admin
      </button>
      <Suspense fallback={<h4>Loading...</h4>}>
        {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
      </Suspense>
    </>
  );
};

export default Home;
