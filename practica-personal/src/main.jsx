import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FirstApp } from "./FirstApp";
import { ComponentApp } from "./ComponentApp";
import GiftExpertApp from "./GiftExpertApp";
import { MultipleCustomHooks } from "./components/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp title="Counter" value={10}></FirstApp>
    <ComponentApp></ComponentApp>
    <GiftExpertApp></GiftExpertApp> */}
    <MultipleCustomHooks></MultipleCustomHooks>

  </React.StrictMode>,
)
