import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

import Navbar from './Navbar'

const Layout = ({ children }) => (
  <Box >
   <Navbar />
    <Box marginTop={3} sx={{ p: 2 }}>{children}</Box>
  </Box>
);

export default Layout;
