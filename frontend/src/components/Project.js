import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Project() {
  return (
    <div className="bg-black text-white font-serif">
      <div className="flex-col justify-center p-2 text-center">
        <motion.h1
          className="text-5xl m-8 m-10 mt-16"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", delay: "0.8", duration: "1.4" }}
        >
          Micro E-Commerce Project
        </motion.h1>
        <motion.h2
          className="text-4xl m-8 mt-16 "
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", delay: "0.8", duration: "1.5" }}
        >
          Mimi Voice Assistent
        </motion.h2>
        <motion.button
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: "1",
          }}
        >
          <Link id="mimiStartPage" to="/mimi/">
            <img
            style={{width:"500px"}}
              className="mx-96 mt-8 mt-2 p-2 mb-16 pb-6"
              src="https://img.freepik.com/premium-vector/voice-assistant-concept-page-personal-mobile-voice-recognition-abstract-sound-waves-microphone-icon-neon-music-equalizer-smart-home-ui-element-speaking-waveform-gradient-flow_87408-196.jpg"
              alt=""
            />
          </Link>
        </motion.button>
      </div>
      <section className="bg-white text-black  pt-1">
        <div className="my-16 pt-14 ">
          <h3 className="text-center text-4xl pb-28">
            Summary of tools applied in the project{" "}
          </h3>
          <section className="flex justify-aroud">
            <div className="px-96">
              <h4 className="text-3xl">Frontend</h4>
              <ul className="text-xl">
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
              <h4 className="text-3xl ">Backend</h4>
              <ul className="text-xl">
                <li>Node js</li>
                <li>Framework Express js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Cros</li>
                <li>Crypto-bcrypt</li>
                <li>Express-validator</li>
                <li>Nodemon</li>
                <li>Stripe</li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Project;
