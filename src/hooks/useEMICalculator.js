import { useState } from "react";

const useEMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEMI] = useState(0);
  const [schedule, setSchedule] = useState([]);

  const calculateEMI = () => {
    const principalAmount = parseFloat(principal);
    const interestRate = parseFloat(rate) / 100 / 12; // Convert annual to monthly
    const tenureInMonths = parseInt(tenure, 10);

    if (!isNaN(principalAmount) && !isNaN(interestRate) && !isNaN(tenureInMonths)) {
      const emiValue =
        (principalAmount * interestRate) /
        (1 - Math.pow(1 + interestRate, -tenureInMonths));
      setEMI(emiValue);

      // Generate amortization schedule
      let currentBalance = principalAmount;
      const scheduleArray = [];

      for (let month = 1; month <= tenureInMonths; month++) {
        const interest = currentBalance * interestRate;
        const principalPayment = emiValue - interest;
        currentBalance -= principalPayment;

        scheduleArray.push({
          month,
          principal: principalPayment,
          interest,
          balance: currentBalance < 0 ? 0 : currentBalance,
        });
      }

      setSchedule(scheduleArray);
    } else {
      setEMI(0);
      setSchedule([]);
    }
  };

  return {
    principal,
    setPrincipal,
    rate,
    setRate,
    tenure,
    setTenure,
    setEMI,
    emi,
    calculateEMI,
    schedule,
    setSchedule,  
  };
};

export default useEMICalculator;
