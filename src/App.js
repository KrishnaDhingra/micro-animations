import './index.css'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'


const Cursor = styled(motion.div)`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: black;
`

function App() {

  const animation = {
    hidden:{
      y: 0, 
      scale: 1
    },
    visible:{
      y: [0, 0, 0, 0, 50, 50, 50, 50, 100, 100, 100, 100, 0],
      scale:[1, 1, 1, 1, 1, 0.6, 1, 1, 1, 1, 1, 1, 1, 0.6, 1, 1, 1, 1, 1, 1, 1, 0.6, 1, 1, 1, 1, 1, 1],

      transition:{
        duration: 12
      }
    }
  }
  return (
    <div className="App">
      <Cursor
        variants={animation}
        initial="hidden"
        animate="visible"
      >
      </Cursor>
    </div>
  );
}

export default App;
