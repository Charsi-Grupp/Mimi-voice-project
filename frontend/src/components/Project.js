import React from 'react'
import { Link } from 'react-router-dom'
function Project() {
  
  return (
    <div className='bg-black text-white font-serif'>
      <div className='flex-col justify-center p-4 text-center'>
      <h1 className='text-5xl m-8 m-10 mt-16'>Micro E-Commerce Project</h1>
      <h2 className='text-4xl m-8 mt-16 '>Mimi Voice Assistent</h2>
      <button><Link to="/mimi/"><img className='mx-96 mt-12 mt-16 p-11' src="https://img.freepik.com/premium-vector/voice-assistant-concept-page-personal-mobile-voice-recognition-abstract-sound-waves-microphone-icon-neon-music-equalizer-smart-home-ui-element-speaking-waveform-gradient-flow_87408-196.jpg" alt="" /></Link></button>
      
      </div >
      <section className='bg-white text-black  pt-1'>
        <div className='my-16 pt-14 '>
      <h3 className='text-center text-4xl pb-28'>Summary of tools applied in the project </h3>
      <section className='flex justify-aroud'>
        <div className='px-96'>
        <h4 className='text-3xl'>Frontend</h4>
        <ul className='text-xl'>
     <li>Javascript E6</li>
     <li>Framework React js</li>
     <li>Css3 Framework Tailwind</li>
     <li>Fetch axios react</li>
     <li>Stripe Payment</li>
     <li>Alan Ai voice asistent</li>
     <li>Framer Motion React</li>
     <li>React-Router-dom</li>
     <li>React modal</li>
     </ul> 
        </div>
        <div>
        <h4 className='text-3xl '>Backend</h4>
        <ul className='text-xl'>
     <li>Node js</li>
     <li>Framework Express js</li>
     <li>MongoDB</li>
     <li>Mongoose</li>
     <li>Cros</li>
     <li>Crypto-bcrypt</li>
     <li>express-validator</li>
     <li>Nodemon</li>
     <li>Stripe</li>
     </ul> 
        </div>
    
      </section>
      </div>
      </section>
    </div>
  )
}

export default Project