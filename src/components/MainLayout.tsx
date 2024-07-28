import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box display="flex" flexGrow={1}>
        <Sidebar />
        <Box flexGrow={1} padding="20px">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
