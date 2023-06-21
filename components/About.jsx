import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </h3>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am Sophomore majoring in Computer Science at National University
            of Singapore
          </p>
          <p className="py-2 text-gray-600">
            As a deveoper, I am passionate about creating seamless user
            experiences and developing robust back-end systems that not only
            meet the current needs of the user but also anticipate future
            demands.
          </p>
          <p className="py-2 text-gray-600">
            With a focus on delivering high-quality, efficient, and scalable
            software solutions, I am looking for an internship opportunity where
            I can grow as a developer and make a meaningful impact on the
            organization.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl glex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/image.png"
            alt="/"
            width="400"
            height="600"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
