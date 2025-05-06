import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "aa1084ac36ba331b4f58cb1a";
const BASE_CURRENCY = "USD";

const useExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${BASE_CURRENCY}`
        );
        if (res.data?.result === "success") {
          setExchangeRates(res.data.conversion_rates);
        } else {
          throw new Error(res.data["error-type"] || "API error");
        }
      } catch (err) {
        console.error("Exchange rate fetch failed:", err);
        setError("Failed to fetch exchange rates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return { exchangeRates, loading, error };
};

export default useExchangeRates;
