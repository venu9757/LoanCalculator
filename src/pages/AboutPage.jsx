import React from "react";
import { Paper, Typography, Box, Divider } from "@mui/material";

const About = () => {
  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4, mx: "auto", maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom>
        About EMI Calculator App
      </Typography>

      <Typography variant="body1" paragraph>
        This EMI Calculator application is a fully functional and interactive
        loan management tool built using React.js and Material UI. It helps
        users easily estimate monthly EMI payments and review detailed
        amortization schedules.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Key Features
      </Typography>
      <ul>
        <li>
          <Typography>EMI Calculation based on principal, rate, and tenure.</Typography>
        </li>
        <li>
          <Typography>Dynamic currency conversion using real-time exchange rates.</Typography>
        </li>
        <li>
          <Typography>Amortization schedule generation with monthly breakdowns.</Typography>
        </li>
        <li>
          <Typography>Form validation and input error handling.</Typography>
        </li>
        <li>
          <Typography>Reset functionality to clear all data.</Typography>
        </li>
      </ul>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Technologies Used
      </Typography>
      <ul>
        <li>
          <Typography>React.js – for building the UI and managing state.</Typography>
        </li>
        <li>
          <Typography>Material UI – for responsive and accessible UI components.</Typography>
        </li>
        <li>
          <Typography>Custom Hooks – <code>useEMICalculator</code> and <code>useExchangeRates</code> manage EMI logic and API calls.</Typography>
        </li>
      </ul>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Author
      </Typography>
      <Typography>
        Developed by Venugopal Challa – a Web Developer passionate about frontend
        technologies, React, and modern UI development.
      </Typography>
    </Paper>
  );
};

export default About;
