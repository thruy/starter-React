import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
//import Demo from './component/Demo';
import React from 'react';
import Header from './component/Header/Header';

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
    </div>
  );
}

export default App;
