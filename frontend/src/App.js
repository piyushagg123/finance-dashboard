import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarContext from "./context/NavbarContext";
import axios from "axios";
import getBaseUrl from "./services/connectionString";
import DaybookReport from "./pages/DaybookReport";
// import ListInfo from "./pages/ListInfo";

// import Dashboard from "./pages/Dashboard";
// import Reports from "./pages/Reports";
// import Sidebar from "./components/Sidebar";
// import Blogs from "./pages/Blogs";
// import About from "./pages/About";
// import Newspaper from "./pages/Newspaper";
// import Terms from "./pages/Terms";
// import Privacy from "./pages/Privacy";
// import Settings from "./pages/Settings";
// import Payroll from "./pages/Payroll";
// import Settling from "./pages/Settling";
// import ExpensesTracker from "./pages/ExpensesTracker";
// import Payable from "./pages/Payable";
// import Receivable from "./pages/Receivable";
// import Result from "./pages/Result";
// import Report from "./pages/Report";
// import AddUser from "./pages/AddUser";
// import Transaction from "./pages/Transaction";
// import SettlingReport from "./pages/SettlingReport";
// import Test from "./pages/Test";
// import TopNavbar from "./components/TopNavbar";
// import Loading from "./components/Loading";

// Pages Files
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Reports = lazy(() => import("./pages/Reports"));
const Blogs = lazy(() => import("./pages/Blogs"));
const About = lazy(() => import("./pages/About"));
const Newspaper = lazy(() => import("./pages/Newspaper"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Settings = lazy(() => import("./pages/Settings"));
const Payroll = lazy(() => import("./pages/Payroll"));
const Bank = lazy(() => import("./pages/Bank"));
const Settling = lazy(() => import("./pages/Settling"));
const ExpensesTracker = lazy(() => import("./pages/ExpensesTracker"));
const Payable = lazy(() => import("./pages/Payable"));
const Receivable = lazy(() => import("./pages/Receivable"));
const Result = lazy(() => import("./pages/Result"));
const Report = lazy(() => import("./pages/Report"));
// Components added
const CreateList = lazy(() => import("./pages/CreateList"));
const ViewLists = lazy(() => import("./pages/ViewLists"));
const ListInfo = lazy(() => import("./pages/ListInfo"));
// ---------------------------------------------------------
const AddUser = lazy(() => import("./pages/AddUser"));
const Transaction = lazy(() => import("./pages/Transaction"));
const SettlingReport = lazy(() => import("./pages/SettlingReport"));
const Test = lazy(() => import("./pages/Test"));
// Components File
const Sidebar = lazy(() => import("./components/Sidebar"));
const TopNavbar = lazy(() => import("./components/TopNavbar"));
const Loading = lazy(() => import("./components/Loading"));

const App = () => {
  let [validToken, setValidToken] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [dropdown, setDropdown] = useState(null);

  const handleToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const mobileHandleToggle = () => {
    if (window.innerWidth <= 750) {
      setSidebarToggle(!sidebarToggle);
    }
  };

  const handleDropdownClick = (dropdownName) => {
    if (dropdown !== dropdownName) {
      setDropdown(dropdownName);
    }
  };

  // useEffect(() => {
  //   //set JWT token here
  //   console.log(getBaseUrl() + "api/users/verifyToken");
  //   axios.defaults.withCredentials = true;
  //   axios
  //     .get(getBaseUrl() + "api/users/verifyToken")
  //     .then((response) => {
  //       setValidToken(response.data.result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setValidToken(error.response.data.result);
  //     });
  // }, []);

  return (
    <div className="d-flex overflow-x-hidden overflow-y-hidden h-max">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <NavbarContext>
            <Sidebar
              dropdown={dropdown}
              sidebarToggle={sidebarToggle}
              mobileHandleToggle={mobileHandleToggle}
              handleDropdownClick={handleDropdownClick}
            />
          </NavbarContext>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<Newspaper />} />
            <Route
              path="/dashboard/*"
              element={
                <DashboardRoutes
                  handleToggle={handleToggle}
                  sidebarToggle={sidebarToggle}
                />
              }
            />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/add" element={<AddUser />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/daybook/payable" element={<Payable />} />
            <Route path="/daybook/receivable" element={<Receivable />} />
            <Route path="/expenses-tracker" element={<ExpensesTracker />} />
            <Route path="/match-settling/result" element={<Result />} />
            <Route path="/match-settling/report" element={<Report />} />
            <Route path="/settling/transaction" element={<Transaction />} />
            <Route path="/settling/report" element={<SettlingReport />} /> */}
            {/* <Route path="/test" element={<Test />} /> */}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

const DashboardRoutes = ({ handleToggle, sidebarToggle }) => (
  <>
    <div className="premium_container">
      <TopNavbar handleToggle={handleToggle} sidebarToggle={sidebarToggle} />
      <Routes>
        <Route path="/full-report" element={<Dashboard />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/followup/create-list" element={<CreateList />} />
        <Route path="/followup/view-list" element={<ViewLists />} />
        <Route path="/followup/view-list/:id" element={<ListInfo />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/daybook/deposit" element={<Payable />} />
        <Route path="/daybook/withdraw" element={<Receivable />} />
        <Route path="/daybook/daybook-report" element={<DaybookReport />} />
        <Route path="/expenses-tracker" element={<ExpensesTracker />} />
        <Route path="/settling/transaction" element={<Transaction />} />
        <Route path="/settling/report" element={<SettlingReport />} />
        <Route path="/match-settling/result" element={<Result />} />
        <Route path="/match-settling/report" element={<Report />} />
      </Routes>
    </div>
  </>
);

export default App;
