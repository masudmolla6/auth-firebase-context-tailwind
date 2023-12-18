import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className="flex justify-center navbar bg-primary text-primary-content">
        <Link
          className="text-xl mx-2 text-white bg-orange-500 hover:bg-emerald-400 px-8  py-1 rounded-full"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-xl mx-2 text-white bg-orange-500 hover:bg-emerald-400 px-8  py-1 rounded-full"
          to="/register"
        >
          Register
        </Link>
        <Link
          className="text-xl mx-2 text-white bg-orange-500 hover:bg-emerald-400 px-8  py-1 rounded-full"
          to="/login"
        >
          LogIn
        </Link>
      </nav>
    );
};

export default Header;