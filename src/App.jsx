import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomerSignup from "./pages/CustomerSignup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<CustomerSignup />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
