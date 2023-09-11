import React from "react";

function AboutMe() {
  return (
    <section className="bg-olive text-beige h-screen flex flex-col justify-center items-center"
    // style={{
    //   backgroundImage: `url('/images/beige_shapes.png')`, // Replace with the path to your image
    //   backgroundSize: "cover", // Adjust as needed
    //   backgroundPosition: "center", // Adjust as needed
    // }}
    >
      <div className="flex items-center">
        <div>
          <h1 className="text-8xl font-bold mb-10 animate-slide-in-left">Nick Sweet</h1>
          <p className="text-4xl mb-10 animate-slide-in-left">Full Stack Web Developer</p>
        </div>
        <img
          src="/images/portfolio_pic.jpg"
          alt="Your Alt Text"
          className="w-64 h-64 rounded-full ml-12 animate-slide-in-right"
        />
      </div>
      <div className="text-center max-w-screen-lg mt-12 animate-fade-in border-2 border-beige rounded-full bg-olive bg-opacity-20 pt-3 pb-3 pl-8 pr-8">
        <h2 className="text-3xl font-extrabold leading-9 text-white-900 pb-4">
          About Me
        </h2>
        <p className="c text-lg leading-6 text-white-600">
          Hey! I'm Nick Sweet, a Full Stack Developer with a passion for
          creating web applications using the MERN stack (MongoDB, Express,
          React, Node.js). I recently graduated from a Full Stack boot camp
          program at UCF, where I honed my skills in both front-end and
          back-end development.
        </p>
        <p className="mt-4 text-lg leading-6 text-white-600">
          My journey into web development began after years of working in bar
          management at a restaurant. The problem-solving and multitasking
          skills I gained in the hospitality industry have proven to be
          valuable assets in my transition to software development.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
