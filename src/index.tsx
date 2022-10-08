import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App'
import EIP3326 from './eip-3326'
import EIP3085 from './eip-3085'
import ETHApprove from './eth-approve'
import TronApprove from './tron-approve'
import reportWebVitals from './reportWebVitals'
import Header from '~cps/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="eip-3326" element={<EIP3326 />} />
        <Route path="eip-3085" element={<EIP3085 />} />
        <Route path="eth-approve" element={<ETHApprove />} />
        <Route path="tron-approve" element={<TronApprove />} />
      </Routes>
    </HashRouter>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
