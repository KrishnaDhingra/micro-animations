import './index.css'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

function App() {

  return (
    <div className="container flex w-full h-screen">
      <div className="left_container flex flex-col justify-start items-end w-1/2 h-full bg-blue-300 p-16">
        <span className="text-gray-400 text-md font-normal w-72 gap-6">Choose only the options that have been applied incorrectly</span>
        <div className="inner_container flex justify-start items-center gap-4 border-2 border-red-300">
          <div className="h-6 w-6 rounded border-2 border-gray-500"></div>
          <span className="text-white text-md font-normal">White Space</span>
        </div>
      </div>
      <div className="right_container flex flex-col justify-start w-1/2 h-full bg-gray-300 p-10">

      </div>
    </div>
  );
}

export default App;
