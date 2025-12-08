import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import Demo from './component/Demo';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>My demo component</div>
        <Demo />
      </div>
    )
  }
}

// const App = () => {
//   return (
//     <div>
//       <div>My demo component</div>
//       <Demo></Demo>
//     </div>
//   );
// }

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div>My demo component</div>
//       <Demo></Demo>
//     </div>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World, Hoang.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
