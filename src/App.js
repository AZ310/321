import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import TicketList from "./pages/recent"
import AddTicketAdmin from "./pages/addTicket"
import PaymentPage from "./pages/payment"
// import LogoComponent from './components/LogoComponent';

function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recent" element={<TicketList />} />
        <Route path="/addticketadmin" element={<AddTicketAdmin />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
