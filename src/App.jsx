import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExchangeRatesPage from "./pages/ExchangeRatesPage";
import CurrencyConverter from "./components/CurrencyConverter";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
  
     
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/exchange-rates" element={<ExchangeRatesPage/>} />
            <Route path="/converter" element={<CurrencyConverter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
    
  
  );
}

export default App;
