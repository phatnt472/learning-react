import logo from './logo.svg';
import './App.css';
import ListTodo from './components/Todo/ListTodo';
import MyComponent from './components/Example/MyComponent'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import ListUser from './components/User/ListUser';
import DetailUser from './components/User/DetailUser';

import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  // const listRoute = [
  //   {
  //     path: '/',
  //     Component: Home
  //   },
  //   {
  //     path: '/todo',
  //     Component: ListTodo
  //   },
  //   {
  //     path: '/about',
  //     Component: MyComponent
  //   },
  //   {
  //     path: '/user',
  //     Component: ListUser
  //   },
  //   {
  //     path: '/user/:id',
  //     Component: DetailUser
  //   }
  // ]
  return (

    <div className="App">
      <div className='App-header'>
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='text-4xl text-red-400'>Simple List Todo</h1>


        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route path="/user" exact>
            <ListUser />
          </Route>
          <Route path="/user/:id" >
            <DetailUser />
          </Route>
        </Switch>



      </div>
    </div>


  );
}

export default App;
