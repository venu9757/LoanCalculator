import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Grid,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import useEMICalculator from "../hooks/useEMICalculator";
import useExchangeRates from "../hooks/useExchangeRates";

const EMICalculator = () => {
  const [showTable, setShowTable] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  const {
    principal,
    setPrincipal,
    rate,
    setRate,
    tenure,
    setTenure,
    emi,
    setEMI,
    calculateEMI,
    schedule,
    
  } = useEMICalculator();

  const { exchangeRates, loading, error } = useExchangeRates();
  const data = Object.entries(exchangeRates);

  const [errors, setErrors] = useState({
    principal: "",
    rate: "",
    tenure: "",
  });

  const validateField = (field, value) => {
    if (value.trim() === "") return "Required";
    if (isNaN(value)) return "Input must be a number";
    return "";
  };

  const handleInputChange = (field, value) => {
    const errorMsg = validateField(field, value);

    if (field === "principal") setPrincipal(value);
    if (field === "rate") setRate(value);
    if (field === "tenure") setTenure(value);

    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const isFormValid = () =>
    Object.values(errors).every((err) => err === "") &&
    principal.toString().trim() !== "" &&
    rate.toString().trim() !== "" &&
    tenure.toString().trim() !== "" &&
    !isNaN(principal) &&
    !isNaN(rate) &&
    !isNaN(tenure);

  const handleCalculate = () => {
    if (principal > 0 && rate > 0 && tenure > 0) {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };

  const handleReset = () => {
    setPrincipal("");
    setRate("");
    setTenure("");
    setEMI("");
  
   
    setSelectedCurrency("INR");
    setErrors({ principal: "", rate: "", tenure: "" });
    setShowTable(false);
   
  };
  

  const getConvertedAmount = (amount) => {
    if (selectedCurrency === "INR") return amount;
    const rate = exchangeRates[selectedCurrency] || 1;
    return amount * rate;
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4, maxWidth: 700, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Loan EMI Calculator
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Loan Amount (Principal)"
            fullWidth
            value={principal}
            error={!!errors.principal}
            helperText={errors.principal}
            onChange={(e) => handleInputChange("principal", e.target.value)}
            onBlur={() =>
              setErrors({
                ...errors,
                principal: validateField("principal", principal),
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Annual Interest Rate (%)"
            fullWidth
            value={rate}
            error={!!errors.rate}
            helperText={errors.rate}
            onChange={(e) => handleInputChange("rate", e.target.value)}
            onBlur={() =>
              setErrors({ ...errors, rate: validateField("rate", rate) })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Loan Tenure (Months)"
            fullWidth
            value={tenure}
            error={!!errors.tenure}
            helperText={errors.tenure}
            onChange={(e) => handleInputChange("tenure", e.target.value)}
            onBlur={() =>
              setErrors({ ...errors, tenure: validateField("tenure", tenure) })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label="Currency"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            SelectProps={{ native: true }}
          >
            <option value="INR">INR (₹)</option>
            {data.map(([code]) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              calculateEMI();
              handleCalculate();
            }}
            disabled={!isFormValid()}
          >
            Calculate EMI
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={handleReset}
          >
            Reset
          </Button>
        </Grid>

        {emi > 0 && (
          <Grid item xs={12}>
            <Typography variant="h6" color="primary">
              EMI: {selectedCurrency}{" "}
              {getConvertedAmount(emi).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </Typography>
          </Grid>
        )}

        {showTable && emi > 0 && schedule.length > 0 && (
          <>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mt: 3 }}>
                Amortization Schedule
              </Typography>
              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Month</TableCell>
                      <TableCell>Principal ({selectedCurrency})</TableCell>
                      <TableCell>Interest ({selectedCurrency})</TableCell>
                      <TableCell>Remaining Balance ({selectedCurrency})</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {schedule.map(
                      ({ month, principal, interest, balance }) => (
                        <TableRow key={month}>
                          <TableCell>{month}</TableCell>
                          <TableCell>
                            {getConvertedAmount(principal).toFixed(2)}
                          </TableCell>
                          <TableCell>
                            {getConvertedAmount(interest).toFixed(2)}
                          </TableCell>
                          <TableCell>
                            {getConvertedAmount(balance).toFixed(2)}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </>
        )}
      </Grid>
    </Paper>
  );
};

export default EMICalculator;
