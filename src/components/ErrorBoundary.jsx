import React from "react";
import { Typography, Box } from "@mui/material";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box textAlign="center" mt={5}>
          <Typography variant="h4" color="error">Something went wrong.</Typography>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
