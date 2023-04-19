import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from './store/slices/counterSlices';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value)
    console.log(value)
  }

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Contador</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <span className="text-5xl font-bold mb-4">{counter}</span>
        <div className="flex flex-row justify-center items-center mb-4">
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full mr-2"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div className="flex flex-row justify-center items-center mb-4">
          <input type="number" className="py-2 px-4 rounded-full border-purple-500 border-2 mr-2" onChange={handleInput} />
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => dispatch(incrementBy(value))}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


