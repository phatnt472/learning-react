import logo from './logo.svg';
import './App.css';
import ListTodo from './components/Todo/ListTodo';
import MyComponent from './components/Example/MyComponent'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import ListUser from './components/User/ListUser';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const listRoute = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todo',
      component: ListTodo
    },
    {
      path: '/about',
      component: MyComponent
    },
    {
      path: '/user',
      component: ListUser
    }
  ]
  return (
    <Router>
      <div className="App">
        <div className='App-header'>
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='text-4xl text-red-400'>Simple List Todo</h1>
          <Routes>
            {listRoute.map((item, index) =>
              <Route path={item.path} key={index} Component={item.component} />
            )}
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
