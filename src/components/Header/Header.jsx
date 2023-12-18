import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
    .catch(error=>console.error(error))
  }
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
          to="/profile"
        >
          Peofile
        </Link>
        <Link
          className="text-xl mx-2 text-white bg-orange-500 hover:bg-emerald-400 px-8  py-1 rounded-full"
          to="/orders"
        >
          Orders
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
        {user ? (
          <>
            <span>{user.email}</span>
            <button className="btn btn-xs" onClick={handleLogOut}>
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </nav>
    );
};

export default Header;