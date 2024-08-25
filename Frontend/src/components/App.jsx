import "./App.css";
import Heropage from "./Heropage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./Features.jsx";
import Getstarted from "./Getstarted.jsx";
import Layout from "./Layout.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Dashboard from "./Dashboard.jsx";
import Overview from "./Overview.jsx";
import Budgets from "./Budgets.jsx";
import SavingsWallet from "./SavingsWallet.jsx";
import BankAccountdashboard from "./BankAccountdashboard.jsx"
import BankConnecth from './BankConnecth'
import Featuresh from './Featuresh.jsx'

import Layout2 from "./Layout2.jsx"


function App() {
  
  return (
    <Router>
      <Routes>
        
        <Route
          path="/"
          element={
            <Layout>
              <Heropage />
              <Features />
             
          <Getstarted />

            </Layout>
          }
        />
 <Route
          path="/getstarted"
          element={
            <Layout>
              <Getstarted />
            </Layout>
          }
        />



        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />

<Route
          path="/bankConnecth"
          element={
            <Layout>
              <BankConnecth/>
            </Layout>
          }
        />
<Route
          path="/Featuresh"
          element={
            <Layout>
              <Featuresh/>
            </Layout>
          }
        />


        <Route
          path="/dashboard"
          element={
            <Layout2>
              <Dashboard/>
            </Layout2>
          }
        />
        <Route
          path="/overview"
          element={
            <Layout2>
              <Overview/>
            </Layout2>
          }
        />
        <Route
          path="/Budgets"
          element={
            <Layout2>
              <Budgets/>
            </Layout2>
          }
        />
        <Route
          path="/savingswallet"
          element={
            <Layout2>
              <SavingsWallet/>
            </Layout2>
          }
        />
         <Route
          path="/BankAccountdashboard"
          element={
            <Layout2>
              <BankAccountdashboard/>
            </Layout2>
          }
        />


      </Routes>
    </Router>
  );
}














export default App;
