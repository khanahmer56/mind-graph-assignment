import React from "react";
import { Typography } from "@mui/material";
import { PersonPin } from "@mui/icons-material";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: "250px",
        padding: "20px",
        background: "#f0f0f0",
        height: "100vh",
        backgroundColor: "blue",
        color: "white",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ my: 5 }}>
        Dashboard
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          bgcolor: "orange",
          px: "10px",
          py: "5px",
          borderRadius: "5px",
        }}
      >
        Users <PersonPin sx={{ color: "white", fontSize: "26px" }} />
      </Typography>
    </div>
  );
};

export default Sidebar;
