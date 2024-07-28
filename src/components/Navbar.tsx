import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";

const Navbar: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log("user", user);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        {user.username && (
          <Box display="flex" alignItems="center">
            <Box>
              <Typography variant="body1" style={{ marginRight: "10px" }}>
                {user.firstName +
                  " " +
                  " " +
                  user.maidenName +
                  " " +
                  user.lastName}
              </Typography>
              <Typography
                variant="body2"
                style={{ marginRight: "8px", color: "lightgray" }}
              >
                {user.email}
              </Typography>
            </Box>

            <Avatar alt={user.username} src={user.image} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
