import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, logout } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    toast(`You've logged out`);
  };

  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">E</span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={'/'}
              href="/"
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? { color: 'white' } : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/posts'}
              href="/"
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? { color: 'white' } : undefined)}
            >
              My posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/new'}
              href="/"
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? { color: 'white' } : undefined)}
            >
              Add post
            </NavLink>
          </li>
        </ul>
      )}
      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? <button onClick={logoutHandler}>Log out</button> : <Link to={'/login'}>Log in</Link>}
      </div>
    </div>
  );
};

export default Navbar;
