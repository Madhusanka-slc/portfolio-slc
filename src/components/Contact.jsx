import React from "react";

import {motion} from "framer-motion";
const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "madhusanka.slc@gmail.com" },
    { logo: "logo-whatsapp", text: "+94 71 5734148" },
    {
      logo: "location",
      text: "demo location",
    },
  ];
  const social_media = [
    { logo: "logo-github", link: "https://github.com/Madhusanka-slc" },
    { logo: "mail-outline", link: "mailto:madhusanka.slc@gmail.com" },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/chathura-madhusanka-4605401a5/",
    },
  ];

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 70,
  
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };
  return (
    <section id="contact">
      <div className="mt-20 p-20 flex flex-col items-center justify-center w-full bg-gradient-to-br from-[#c4b5eb] to-[#4b3881]">
        <div className="text-center mt-8 flex flex-col  justify-center items-center">
          <h3 className="text-4xl font-semibold text-[#010851] ">
            Contact <span className="text-white">Me</span>
          </h3>

          <motion.div className="flex flex-col items-center justify-center text-center gap-5 mt-5" variants={variants} initial="hidden" whileInView={{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:100,delay:0}}}>
            <motion.h3 variants={variants} initial="hidden" whileInView={{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:100,delay:0}}}>Excited to collaborate? Let's make it happen!</motion.h3>
            <motion.h1 className="text-2xl" variants={variants} initial="hidden" whileInView={{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:100,delay:0}}}>
              madhusanka.slc@gmail.com | +94 71 57 34 148
            </motion.h1>

            <motion.a href="mailto:madhusanka.slc@gmail.com" variants={variants} initial="hidden" whileInView={{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:100,delay:0}}}>
              <motion.button
                  className="z-50 font-semibold md:mx-0 mx-auto py-2 px-4 flex items-center gap-2 mt-8 relative border-2 hover:border-[#4b3881] border-[#4b3881] bg-transparent text-[#4b3881] 
                transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#4b3881] 
                before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100" 
                >
                  Let's Talk
                </motion.button>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
