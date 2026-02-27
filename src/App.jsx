import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Chat from "./component/Chat";
import About from "./component/About";

export default function App() {

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar/>
              <Routes>
            <Route path="/" element={<Product/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path="/about" element={<About/>} /> 
      </Routes>
    </div>
  );
}