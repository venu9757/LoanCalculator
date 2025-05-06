import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NotFound = () =>{
  const navigate = useNavigate();

  return(
    <Box textAlign="center" mt={5}>
    <Typography variant="h3">404</Typography>
    <Typography variant="h5">Page Not Found</Typography>
    <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go to Home
      </Button>
  </Box>
  )
} 

  
;

export default NotFound;
