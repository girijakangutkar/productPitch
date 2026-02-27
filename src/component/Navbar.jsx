import { NavLink, Route, Routes } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="flex w-full p-2 gap-3 rounded-b-lg shadow-md">
          <nav className="flex gap-3">
              <NavLink to="/" className={({ isActive }) => 
    isActive 
      ? "active text-blue-500 font-serif text-lg font-bold" 
      : "text-blue-300 font-serif text-lg font-bold"
  }>ProductPitch</NavLink>
              <NavLink to="/chat" className={({ isActive }) => 
    isActive 
      ? "active text-blue-500 font-serif text-lg font-bold" 
      : "text-blue-300 font-serif text-lg font-bold"
  }>Chat</NavLink>
              <NavLink to="/about" className={({ isActive }) => 
    isActive 
      ? "active text-blue-500 font-serif text-lg font-bold" 
      : "text-blue-300 font-serif text-lg font-bold"
  }>About</NavLink>
        </nav>
    </div>
  );
};

export default Navbar;