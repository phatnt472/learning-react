import logo from './logo.svg';
import './App.css';
import ListTodo from './components/Todo/ListTodo';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='text-4xl text-red-400'>Simple List Todo</h1>
        <ListTodo />
      </div>
    </div>

  );
}

export default App;
