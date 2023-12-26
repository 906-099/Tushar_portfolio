import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
   <Tilt className="xs:w-[240px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <section id="about"></section>
    <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} >Introduction</p>
        <h3 className={styles.sectionHeadText}>Overview.</h3>
      </motion.div>
      <motion.p
      variants={fadeIn("","", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
              I'm a skilled software developer with experience in C/C++, Data Structure and Algorithm,
              Fronted Development, and expertise in frameworks like React and Node.js. Also I am familiar with Github, MATLAB, Excel and MS Word. I'm a quick learner and collaborate closely with clients to
              create efficient, scalable, and user-friendly solutions that solve
              real-world problems. Currently, I am Head Coordinator at BMEP (a NGO run by students of NIT Durgapur). My hobbies are to play volleyball and travelling. Let's work together to bring your ideas to life!
              <br/>
              For more information check out the resume link -
              <br />
              <a href="https://drive.google.com/file/d/1iOFb9pzN7X8crfjLrmUgCcu4jwHSKtSd/view?usp=drive_link" target="_blank"><h1 className="text-[40px] text-[#8fbc8f]"><b><u>Resume.</u></b></h1></a>
              
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </>
  )
}



export default SectionWrapper(About,"about");
/*

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");*/