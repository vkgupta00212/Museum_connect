import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import Home from "./component/Home/Home";
import Ticket from "./component/TicketBooking/TicketMain";
import SingleBooking from "./component/TicketBooking/singleBooking";
import GroupBooking from "./component/TicketBooking/groupBooking";
import Work from "./component/Work/Work";
import Canteen from "./component/Canteen/Canteen";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Payment from "./component/TicketBooking/payment"
import BookinOption from "./component/TicketBooking/BookingOption"
import Login from "./component/Login/Login"
import Register from "./component/Login/Register"
import Forgot from "./component/Login/forgot"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/work" element={<Work />} />
          <Route path="/canteen" element={<Canteen />} />
          <Route path="/singlebooking" element={<SingleBooking />} />
          <Route path="/groupbooking" element={<GroupBooking />} />
          <Route path="/payment" element={< Payment/>}/> 
          
          <Route path="/bookingoption" element={< BookinOption/>}/> 
          <Route path="/login" element={< Login/>}/>
          <Route path="/register" element={< Register/>}/>
          <Route path="/forgot" element={< Forgot/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
