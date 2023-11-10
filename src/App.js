import logo from './logo.svg';
import './App.css';
import ListTodo from './components/Todo/ListTodo';
import MyComponent from './components/Example/MyComponent'
import Nav from './components/Nav/Nav'
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className='App-header'>
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='text-4xl text-red-400'>Simple List Todo</h1>
          <Routes>
            <Route path='/' Component={""} exact/>
            <Route path='/todo' Component={ListTodo} />
            <Route path='/about' Component={MyComponent} />
          </Routes>

        </div>
      </div>
    </Router>

  );
}

export default App;
