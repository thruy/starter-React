//import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
//import Demo from './component/Demo';
import React from 'react';
import Header from './component/Header/Header';
import { Link } from 'react-router-dom';

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
      <Header />
      <div>
        test Link to component:
        <div>
          <button>
            <Link to="/users">Go to User</Link>
          </button>
          <button>
            <Link to="/admins">Go to Admin</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
