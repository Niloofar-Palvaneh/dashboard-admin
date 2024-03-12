import React, { useState } from "react"
import './App.css';
// import csd from "./../public/img/people.svg"

function App() {

  return (
    <>
      <div className="mt-6 w-full">
        <div className="border-b p-2 w-full">
          <h1 className="text-xl font-bold text-gray-700">Welcome Niloofar</h1>
          <p className="text-gray-600">Everything works fine. You have 3 unread messages</p>
        </div>
        <div className="flex gap-4 mt-12">
          <div className="sm:hidden w-full overflow-hidden relative">
            <div className="absolute w-full h-full backdrop-opacity-10 text-end p-8 font-bold text-lg text-blue-500" >
              <p>Your sale was good today</p>
            </div>
            <div className="bg-[url('./people.svg')] bg-no-repeat bg-cover w-full h-[350px] md:h-[320px] rounded-xl"></div>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 w-full gap-4">
            <div className="col-span-2 sm:col-span-1 bg-gradient-to-tl from-fuchsia-50 to-red-600 shadow px-6 py-2 rounded-xl text-white">
              <p className="font-bold">Sale today</p>
              <span className="text-xl mt-[5px]">4000</span>
              <p>Sale in 24h ago</p>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-gradient-to-tl from-fuchsia-50 to-amber-600 shadow px-6 py-2 rounded-xl text-white">
              <p className="font-bold">Sale last month</p>
              <span className="text-xl mt-[5px]">310000</span>
              <p>Sale in 30d ago</p>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-gradient-to-tl from-fuchsia-50 to-indigo-600 shadow px-6 py-2 rounded-xl text-white">
              <p className="font-bold">Sale last year</p>
              <span className="text-xl mt-[5px]">54152160000</span>
              <p>Sale in 365d ago</p>
            </div>
            <div className="col-span-2 sm:col-span-1 gap-1 bg-gradient-to-tl from-fuchsia-50 to-teal-600 shadow px-6 py-2 rounded-xl text-white">
              <p className="font-bold">Sale last week</p>
              <span className="text-xl mt-[5px]">20000</span>
              <p>Sale in 7d ago</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;