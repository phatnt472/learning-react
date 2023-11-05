import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent />
      </div>
    </div>
  );
}

export default App;
