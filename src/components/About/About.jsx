import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
//import profileImage from '../../assets/Sanky_patil.png';
import profileImage from '../../assets/ssp.png'; 

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sanket Patil
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                //'Fullstack Developer',
                //  'App Developer',
                //  'UI/UX Designer',
                'Coder',
                'Programmer',
                ' Web Developer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Hi, I’m Sanket — a passionate full-stack developer with hands-on experience in building modern, responsive, and efficient web applications using the MERN stack and other technologies. I love solving real-world problems through clean code, smart design, and continuous learning.          </p>
          {/* Resume Button */}
          <a
            href="https://docs.google.com/document/d/10K0vThIdEEB6a8juxCKFeGSE2dpr8B1A/edit?usp=sharing&ouid=113355095766857619498&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"


            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}



        <div className="md:w-1/2 flex justify-center md:justify-end relative">
  <Tilt
    className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full overflow-visible relative z-10"
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    perspective={1000}
    scale={1.08}
    transitionSpeed={1000}
    gyroscope={true}
  >
    <div className="absolute -top-2 -right-4 w-[110%] h-[110%] rounded-full overflow-hidden border-b-4 border-purple-700">
      <img
        src={profileImage}
        alt="Sanket Patil"
        className="w-full h-full object-cover rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
      />
    </div>
  </Tilt>
</div> 

{/* 
        <div className="md:w-1/2 flex justify-center md:justify-end"> 
        <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
         tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1.08} transitionSpeed={1000} gyroscope={true} >
           <img src={profileImage} 
           alt="Sanket Patil" 
           className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" /> 
           </Tilt>
           </div> */}



      </div>
    </section>
  );
};

export default About;
