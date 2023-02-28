import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FirstApp } from "./FirstApp";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstApp title="Counter" value={10}></FirstApp>
  </React.StrictMode>,
)
