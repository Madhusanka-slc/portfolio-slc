import React from "react";

const Footer = () => {
  const social_media = [
 
   {
    logo:"logo-linkedin",
    link:"https://www.linkedin.com/in/chathura-madhusanka-4605401a5/",
   },
   {
    logo:"logo-github",
    link:"https://github.com/Madhusanka-slc",
   },
   {
    logo:"logo-youtube",
    link:"https://www.youtube.com/@slcblogspotprofile7856",
   },
  ];

  return (
    <div className="flex flex-col justify-center items-center max-w-full bg-gray-800 p-20">
         <div className="text-gray-600 hover:text-white cursor-pointer ">
              <a href="#hero">
              <ion-icon name="chevron-up-outline" size="large" className="white-icon" ></ion-icon>
              </a>
            </div>
    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-10 p-5">
    {social_media?.map((media,i) => (
      <div
        key={i}
        className="text-gray-600 hover:text-white cursor-pointer "
      >
        <a href={media.link}>
        <ion-icon name={media.logo}></ion-icon>
        </a>
       
      </div>
    ))}
  </div>
    <div className="bg-gray-800 w-full text-center text-gray-600 p-5">
      Copyright © 2024 Chathura Madhusanka.All Rights reserved.
      
    </div>
    </div>

  );
};

export default Footer;
