import React from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" color="error">
          Something went wrong.
        </Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
};

export default ErrorPage;
