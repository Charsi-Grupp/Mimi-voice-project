import Cart from "./components/Cart";
import useAlan from "./hooks/useAlan";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage";
import Categories from "./components/Categories";
import MalesStore from "./components/MalesStore";
import FemalesStore from "./components/FemalesStore";
import Login from "./components/Login";
import { UserProvider } from "./context/useUser";
import Account from "./components/Account";
import Layout from "./components/Layout";
import CheckoutForm from "./components/CheckoutForm";
import Completion from "./components/Completion";
import Payment from "./components/Payment";
import Team from "./components/Team";
import TeamMembers from "./components/TeamMembers";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  useAlan();

  return (
    <UserProvider>
      <Router>
      <Layout/>

        <Routes>
        <Route path="/" element={<Project />} />
          <Route path="/mimi" element={<StartPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/males" element={<MalesStore />} />
          <Route path="/females" element={<FemalesStore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/teamMembers" element={<TeamMembers/>} />
        
        </Routes>
     {/*    <Project /> */}
        <Cart />
        <Footer/>
      </Router>
    </UserProvider>
  );
}

export default App;
