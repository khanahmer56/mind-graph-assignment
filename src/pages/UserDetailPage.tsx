import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUserById } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const isUser = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    if (Object.keys(isUser).length === 0) {
      navigate("/");
    }
  }, [navigate, isUser]);
  useEffect(() => {
    if (id) {
      getUserById(id).then((data) => {
        console.log("data", data);
        setUser(data);
      });
    }
  }, [id]);

  if (!user) return <div>Loading...</div>;

  const UserDetailItem: React.FC<{ label: string; value: string }> = ({
    label,
    value,
  }) => (
    <div>
      <p>{label}</p>
      <p style={{ fontWeight: "bold" }}>{value}</p>
    </div>
  );

  return (
    <MainLayout>
      <div>
        <h3>Basic Details</h3>
        <Box display="flex" gap="40px">
          <UserDetailItem label="Name" value={user.username} />
          <UserDetailItem label="Email" value={user.email} />
          <UserDetailItem label="Gender" value={user.gender} />
          <UserDetailItem label="Age" value={user.age} />
          <UserDetailItem label="Phone" value={user.phone} />
          <UserDetailItem label="Date Of Birth" value={user.birthDate} />
        </Box>
      </div>
      <div>
        <h3>Address Details</h3>
        <Box display="flex" gap="40px">
          <UserDetailItem label="Address" value={user.address.address} />
          <UserDetailItem label="City" value={user.address.city} />
          <UserDetailItem label="State Code" value={user.address.stateCode} />
          <UserDetailItem label="Postal Code" value={user.address.postalCode} />
          <UserDetailItem label="Country" value={user.address.country} />
        </Box>
      </div>
      <div>
        <h3>Company Details</h3>
        <Box display="flex" gap="40px">
          <UserDetailItem label="Name" value={user.company.name} />
          <UserDetailItem label="Title" value={user.company.title} />
          <UserDetailItem label="Departement" value={user.company.department} />
        </Box>
      </div>
    </MainLayout>
  );
};

export default UserDetailPage;
