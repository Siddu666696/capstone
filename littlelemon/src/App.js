import './App.css';
import Nav from './Components/Nav';
import HomePage from './Components/HomePage';
import BookingPage from './Components/BookingPage';
import Footer from "./Components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Nav />

     
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/BookingPage" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
