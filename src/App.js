//import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
//import Demo from './component/Demo';
import React from 'react';
import Header from './component/Header/Header';
import { Link, Outlet } from 'react-router-dom';

// const App = () => {
//   return (
//     <div>
//       <div>My demo component</div>
//       <Demo />
//     </div>
//   );
// }

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header />
      </div>

      <div className='main-container'>
        <div className='sidebar-contianer'>

        </div>
        <div className='content-container'>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
