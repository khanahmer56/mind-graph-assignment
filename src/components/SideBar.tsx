import React from "react";
import { Typography } from "@mui/material";
import { PersonPin } from "@mui/icons-material";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Typography variant="h6" gutterBottom className="dashboardTitle">
        Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom className="usersTitle">
        Users <PersonPin className="personIcon" />
      </Typography>
    </div>
  );
};

export default Sidebar;
