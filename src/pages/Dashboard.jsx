import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  if (authLoading || profileLoading) {
    return <div className="mt-10">....loading</div>;
  }
  return (
    <div className="relative w-full flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)]  w-full overflow-auto">
        <div className="w-11/12 max-w-[1000px] mx-auto py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
