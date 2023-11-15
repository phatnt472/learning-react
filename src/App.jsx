import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  document.body.style.backgroundColor = "#0F1E33";
  const [name,  setName] = useState("Phát")
  const [inputData, setInputData] = useState("")
  const handleChangeInput = (event) => {
    setInputData(event.target.value)
  }
  const handleClickButton = () => {
    setName(inputData)
    setInputData("")
  }
  return (
    <div className=''>
      <div className='flex flex-row items-center justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="mb-4 text-[50px] text-pink-600">Hello from ReactJS make by {name}</h1>
      <input value={inputData} onChange={(e) => handleChangeInput(e)} className="border border-gray-300 shadow p-3 rounded-[50px] mr-4 max-width-[300px]"/>
      <button className = "rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300" onClick={handleClickButton}>Click Me</button>
    </div>
  )
}

export default App
