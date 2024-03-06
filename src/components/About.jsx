
import me from "../assets/images/S.L.C Madhusanka.jpg";


import {
  Box,
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
  Plane,
} from "@react-three/drei";

import {
  motion,
  useSpring,
  useViewportScroll,
  useTransform,
} from "framer-motion";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "04" },
    { text: "Companies Work", count: "01" },
  ];
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
      x: -100,
    },
  };
  const abtVariants = {
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

  return (
    <section id="about">
      <div className="main-container relative   h-[800px] min-w-full flex flex-col justify-center items-center bg-gradient-to-br from-[#c4b5eb] to-[#4b3881]">
        <div className="main-wrapper relative flex flex-col justify-center items-center ">
          <h3 className="text-4xl font-semibold  text-[#010851] ">
            About <span className="text-white">Me</span>
          </h3>

          <div className="about-container flex   max-w-4xl mt-10 gap-10   lg:flex-row flex-col items-center">
            <motion.div
              className="img-wrapper md:w-[900px] w-[200px] "
              variants={imgVariants}
              initial="hidden"
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 100,
                  delay: 0,
                },
              }}
            >
              <img
                src={me}
                alt=""
                className="w-full object-cover  rounded-xl "
              />
            </motion.div>

            <motion.div
              className="about-wrapper flex flex-col justify-center md:items-start items-center md:text-left text-center max-w-3xl gap-2"
              variants={abtVariants}
              initial="hidden"
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 100,
                  delay: 1,
                },
              }}
            >
              <p className="text-justify  w-11/12 ">
                Hello! I'm Madhusanka, a software developer from Sri Lanka. My
                genuine passion lies in merging digital solutions with
                mechanical systems.
              </p>

              <p className="text-justify  w-11/12 ">
                Upon completing my degree in Mechanical Engineering at
                Peradeniya University, I intentionally transitioned into a
                career as a software developer. This shift allowed me to channel
                my enthusiasm for enhancing digital solutions within the
                mechanical engineering domain. Currently, I thrive in my role as
                a software developer, actively participating in diverse and
                impactful projects on a daily basis.
              </p>
              <div>
                <a href="./src/assets/Code_a_program.pdf" download>
                  <button
                    className="z-50 font-semibold md:mx-0 mx-auto py-2 px-4 flex items-center gap-2 mt-8 relative border-2 hover:border-[#4b3881] border-[#4b3881] bg-transparent text-[#4b3881] 
          transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#4b3881] 
          before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                  >
                    Resume
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className=" flex justify-center items-center ">
          <svg
            className="absolute bottom-0 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              fill="#ffff"
              fill-opacity="1"
              d="M0,64L80,101.3C160,139,320,213,480,250.7C640,288,800,288,960,266.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
