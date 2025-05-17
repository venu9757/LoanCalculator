import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box textAlign="center" mt={10}>
        <Typography variant="h4" color="error" mb={5}>
          Something went wrong.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go to Home
      </Button>
      </Box>
    
    </div>
  );
};

export default ErrorPage;
