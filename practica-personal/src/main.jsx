import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from "./pages/MainApp";
import { NavComponent } from "./components/NavComponent";
import './index.css'
import { AppRoutes } from "./components/AppRoutes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes></AppRoutes>
  </BrowserRouter>
)
