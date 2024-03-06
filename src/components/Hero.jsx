import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import DSphere from "./DSphere";
import {motion} from "framer-motion";

const Hero = () => {
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 70,
        staggerChildren: 1,
        staggerDirection: 1,
      },
    },
    hidden: {
      opacity: 0,
      x: -30,
    },
  };
 
  return (
    <section
      id="hero"
      className="min-h-screen flex justify-center items-center bg-white"
    >
      <motion.div className="main-container relative w-full flex flex-col-reverse md:justify-start justify-center items-center md:items-start px-40 cursor-pointer" drag dragConstraints={{left:0,right:0,top:0,bottom:0}}>
        <div className="obj-container flex flex-row md:justify-start justify-start items-center relative">
        <div className="model-wrapper w-[600px] h-[600px] md:w-[900px] md:h-[900px]">
            <DSphere color={"#9A7AF1"} intensity={14} distort={0.7} speed={3}/>
          </div>
          <div className="model-wrapper w-[600px] h-[600px] md:w-[900px] md:h-[900px] absolute">
            <DSphere color={"#9A7AF1"} intensity={5} distort={0.6} speed={3}/>
          </div>

          <div className="model-wrapper  w-[500px] h-[500px] md:w-[800px] md:h-[800px] absolute">
          <DSphere color={"#9A7AF1"} intensity={2} distort={0.5} speed={3}/>

          </div>
          <div className="model-wrapper  w-[400px] h-[400px] md:w-[650px] md:h-[650px] absolute ">
          <DSphere color={"#614f94"} intensity={2} distort={0.4} speed={3}/>
     
          </div>
        </div>

        <motion.div className="detail-container absolute left-20 inset-0 flex flex-col justify-center items-center  text-white" >
          <motion.div className="detail-wrapper md:w-3/5 "   variants={variants} initial="hidden" animate="visible">
            <motion.h2 className="md:text-7xl text-4xl font-bold text-white md:mb-6 mb-3 leading-relaxed font-sans" variants={variants}>
             Hi
            </motion.h2>
            <motion.h2 className="md:text-7xl text-4xl font-bold text-[#292e6d] md:mb-6 mb-3 leading-relaxed font-Poppins" variants={variants}>
              I'm Madhusanka
            </motion.h2>
            <motion.p className="md:text-3xl text-xl" variants={variants}>Fullstack Developer</motion.p >
            <motion.div className="img-container" variants={variants}>
              <motion.a href="#about" variants={variants}>
                <motion.button
                  className="z-50 font-semibold md:mx-0 mx-auto py-2 px-4 flex items-center gap-2 mt-8 relative border-2 hover:border-[#4b3881] border-[#4b3881] bg-transparent text-[#4b3881] 
                transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#4b3881] 
                before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100" variants={variants}
                >
                  Start Exploring
                </motion.button>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


