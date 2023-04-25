import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store, setFalse, setTrue } from '../State/store';


const NavBar: React.FC = (): JSX.Element => {
  const isTrue = useSelector((state: {
    isTrue: any; MyState: { isTrue: boolean }
  }) => state.isTrue);

  const isLoggedIn = localStorage.getItem('spotify_access_token') !== null;
  const dispatch = useDispatch();

  if (isLoggedIn) {
    dispatch(setTrue());
  } else {
    dispatch(setFalse());
  }
  return (
    <div className="mt-0 transition-all  flex flex-row items-center bg-white border-solid  border-b-2 border-black">
      <p className="text-lg font-medium flex left mx-8 text-black py-4">Logo</p>
      <ul className="text-lg font-medium flex ml-auto mx-8 text-black py-4">
        <li className="mr-5 hover:drop-shadow-2xl text-white ">
          <Link to="/Dash">Dashboard</Link>
        </li>
        {/* <li className="mr-5">
          <Link to="/Members">Members</Link>
        </li>
        <li className="mr-5">
          <a href="/">About</a>
        </li> */}
        <li>
          <Link to="/Login" className='mr-4'>Login</Link>
        </li>
        <li>
          {isTrue ? <p>True</p> : <p>False</p>}
        </li>
      </ul>
    </div>

  );
};

export default NavBar;

