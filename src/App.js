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
      scale: [1, 1, 1, 1, 1, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 0.6, 1, 1, 1],
      transition: {
        duration: 12,
        repeat: Infinity
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

          <motion.div
            className="flex flex-col p-4 gap-2 pop-up h-24 w-96 bg-blue-300 rounded-md justify-center items-start"
            initial={{
              x:200,
              y:-310,
              display: 'none'
            }}
            animate={{
              x: 220,
              y:-310,
              display: ['flex', 'hidden', 'hidden', 'hidden', 'hidden', 'flex'],
              transition:{
                duration: 12,
                type: 'spring',
                stiffness: 1000,
                repeat: Infinity
              }
            }}
          >
            <p className="text-red-500 text-base font-medium tracking-wider">Oops!</p>
            <p className="text-gray-300 text-base font-normal">Nope! Nothing went wrong</p>
          </motion.div>


        </div>
      </div>
      <div className="right_container flex flex-col justify-start w-1/2 h-full bg-gray-300 p-10 px-16">
        <div className="flex flex-col justify-start gap-6 items-start h-full w-96 p-8">

          <motion.div 
            className="flex flex-col p-8 gap-4 bg-white rounded-md w-full h-64"
            whileHover={{scale:1.1}}
            animate={{
              transition:{
                duration: 1
              }
            }}
          >
            <p className="text-black font-medium text-xl">Chat with us</p>
            <p className="text-gray-600 font-normal text-md leading-7">Not sure which solution is right for you? Chat with us now and we’ll help you out!</p>
            <button className="bg-blue-300 rounded mt-3 p-2 text-xs w-24">Chat now</button>
          </motion.div>

          <div className="flex flex-col gap-4">
            <p className="font-bold text-2xl text-white mt-16">Give it a shot!</p>
            <p className="text-gray-400 font-normal text-md leading-7">Play the free game “uEye” to try out our interactive UI design tests!</p>
            <button className="bg-green-500 rounded mt-3 p-3 font-medium text-base w-36">Play it now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
