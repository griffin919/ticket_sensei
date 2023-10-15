import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const HPLayout = () => {
  return (
    <div>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default HPLayout;
