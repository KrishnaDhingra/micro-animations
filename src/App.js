import './index.css'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

function App() {

  let distance = 52

  const animation = {
    hidden:{
      y:0,
      scale: 1
    },
    visible:{
      y:[0, 0, 0, 0, distance, distance, distance, distance, distance*2, distance*2, distance*2, distance*2, 0],
      scale: [1, 1, 0.6, 1, 1, 1, 1, 0.6, 1, 1, 1, 1, 0.6, 1, 1],
      transition: {
        duration: 12
      }
    }
  }

  return (
    <div className="container flex w-full h-screen">
      <div className="left_container flex flex-col justify-end gap-6 items-end w-1/2 h-full bg-blue-300 p-16">
        <div className="flex flex-col justify-start gap-6 items-start h-full w-80">
          <span className="text-gray-400 text-md font-normal w-full">Choose only the options that have been applied incorrectly</span>

          <div className="inner_container flex justify-start items-center gap-4">
            <div className="h-7 w-7 flex justify-center items-center rounded-sm border border-gray-500">
              <motion.div 
                className="h-4 w-4 bg-white rounded-sm"
                variants={animation}
                initial="hidden"
                animate="visible"
              >
              </motion.div>
            </div>
            <span className="text-white text-md font-normal">White Space</span>
          </div>

          {['Color', 'Scale', 'Alignment', 'Visual Heirarchy', 'Nothing is wrong'].map(element => {
            return(
            <div className="inner_container flex justify-start items-center gap-4">
              <div className="h-7 w-7 rounded-sm border border-gray-500"></div>
              <span className="text-white text-md font-normal">{element}</span>
            </div>            
            )
          })}


        </div>
      </div>
      <div className="right_container flex flex-col justify-start w-1/2 h-full bg-gray-300 p-10">

      </div>
    </div>
  );
}

export default App;
