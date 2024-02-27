import "../src/Assets/styles/App.css";
import "./Assets/styles/style.scss";
import Category from "../src/components/Category";
import Cash from "./components/Cash";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Dinein from "./components/Dinein";
import Orders from "./components/Orders";
import Customer from "./components/Customer";
import Report from "./components/Report";
import PayinOut from "./pages/reports/PayinOut";
import Dayclose from "./pages/reports/Dayclose";
import Dailyreport from "./pages/reports/Dailyreport";

function App() {
  return (
    <div className=" App ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Category />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="/Dinein" element={<Dinein />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/report" element={<Report />}>
          <Route index element={<PayinOut />} />
          <Route path="dayclose" element={<Dayclose />} />
          <Route path="DailyReport" element={<Dailyreport />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
