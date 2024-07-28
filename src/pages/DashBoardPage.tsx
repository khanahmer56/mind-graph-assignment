import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable";
import MainLayout from "../components/MainLayout";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/");
    }
  }, [navigate, user]);

  if (Object.keys(user).length === 0) {
    return null;
  }
  console.log("ahmerr", user);
  return (
    <div>
      <MainLayout>
        <UserTable />
      </MainLayout>
    </div>
  );
};

export default DashboardPage;
