import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/tensile.png";
import project2 from "../assets/images/dashboard.png";
import project3 from "../assets/images/led-blink.png";
import project4 from "../assets/images/under.png";
import project5 from "../assets/images/rotory.png";


import me from "../assets/images/me.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import aboutImg from "../assets/images/about.png";
import { motion, transform } from "framer-motion";
import VanillaTilt from '/node_modules/.vite/vanilla-tilt.js?v=f3a84d89';


const Project = () => {

  
  const projects = [
    {
      img: project1,
      name: "Tensile Testing App",
      technologies : "Spring Boot, JavaFX, MongoDB", 
      details:"An Tensile Testing Application that connects multiple tensile testing machines simultaneously. With real-time monitoring and automated report generation capabilities, it's a game-changer in the field of material testing.",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
      proj: "pro1",
    },
   
    {
      img: project4,
      name: "Autonomous Underwater Vehicle",
      technologies : "Arduino, SOLIDWORKS", 
      details:"An Autonomous Underwater Vehicle fully controllable in its movement and capable of underwater observation.",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://www.youtube.com/watch?v=hdYFpoSao6I",
      proj: "pro2",
    },
    {
      img: project5,
      name: "Rotary Table Automation",
      technologies : "Arduino", 
      details:"Automated Rotary Table that enables precise control over its rotation.",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://www.youtube.com/watch?v=N9xkrUNIxN4",
      proj: "pro3",
    },
  ];

  const  abtVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const imgVariants = {
    visible: {
      opacity: 1,
      x: 0,
  
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 100,
        
      
      },
      
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  const proList = ["pro1", "pro2", "pro3"];
  useEffect(()=>{

    proList.forEach(className => {
      const tiltNode = document.querySelector("." + className); // Select elements by class name
      VanillaTilt.init(tiltNode, {
      max: 5,
      speed: 10,
      glare: true,
      'max-glare': 0.5
    });
    });
  
  

  });

  return (
    <section id="projects" className="py-10 text-black bg-white mt-20">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold  text-[#010851] ">
          Featured <span className="text-[#7260a3]">Projects</span>
        </h3>

        <div className=" flex flex-col items-center py-50 md:gap-20 gap-10 mt-20">
          {projects?.map((project, i) => (
            <div
              key={i}
              className="flex md:flex-row flex-col justify-center md:items-start items-center max-w-6xl  gap:20 gap-10  md:p-0 p-1"
            >
              <motion.div className="flex flex-col text-left md:w-1/2 w-full md:gap-10 gap-5  md:p-0 p-5"  variants={abtVariants} initial="hidden" whileInView={{opacity:1,x:0,transition:{type:"spring",stiffness:100,damping:100,delay:0}}}>
                <h1 className="text-2xl font-bold ">{project.name}</h1>
                <div className="flex flex-col gap-2">
                <p className="text-justify">
                 {project.details}
                </p>
                <h2 className="font-bold text-[#010851]">Technologies used : {project.technologies}</h2>
                </div>
                

                <div className="flex justify-start items-center">
                  <a href={project.live_link} className="">
                    <button
                  className="z-50 font-semibold md:mx-0 mx-auto py-2 px-4 flex items-center gap-2 mt-8 relative border-2 hover:border-[#4b3881] border-[#4b3881] bg-transparent text-[#4b3881] 
                transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#4b3881] 
                before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100" 
                >
                  Live Demo
                </button>
                  </a>
                </div>
              </motion.div>
 
              <motion.div  className="md:w-3/4 w-full cursor-pointer md:p-0 p-5"  variants={imgVariants} initial="hidden" whileInView={{opacity:1,x:0,transition:{type:"spring",stiffness:100,damping:100,delay:1}}} >
                <div className=" w-full">
                <img src={project.img} alt="" className={`w-full ${project.proj}`} />
                </div>
              
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Project;

