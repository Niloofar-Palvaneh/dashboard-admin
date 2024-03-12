import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/gloobal/navbar';
import Sidebar from './components/gloobal/sidebar';
import * as ServiceWorker from "./serviceWorkerRegistration"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Navbar />
    <div className='flex overflow-hidden '>
      <Sidebar />
      <div className='m-4 flex w-full'>
      <App />
      </div>
    </div>


  </React.StrictMode>
);
ServiceWorker.register()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
