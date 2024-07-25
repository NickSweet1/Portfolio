import React from "react";

function AboutMe() {
  return (
    <section className="background text-beige min-h-screen flex flex-col justify-center items-center pb-12 pt-12">
      <div className="flex items-center mt-10 sm:mt-0">
        <div className="center">
          <h1 className="text-2xl font-bold sm:text-8xl sm:mb-10 animate-slide-in-left">Nick Sweet</h1>
          <p className="mr-4 sm:text-4xl sm:mb-10 animate-slide-in-left">Full Stack Web Developer</p>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/images/headshot_256.jpg'}
          alt="Headshot Photo"
          className="rounded-full w-32 h-32 sm:ml-12 animate-slide-in-right sm:w-64 sm:h-64"
        />
      </div>
      <div className="text-center max-w-screen-lg mb-10 sm:mb-0 m-3 mt-12 animate-fade-in border-2 border-beige rounded-3xl sm:rounded-full bg-cabbage bg-opacity-70 pt-3 pb-3 pl-8 pr-8">
        <h2 className="text-3xl font-extrabold leading-9 text-beige pb-4">
          About Me
        </h2>
        <p className="c text-lg leading-6 text-white-600">
          Hey! I'm Nick Sweet, a Full Stack Developer with a passion for
          creating web applications using the MERN stack (MongoDB, Express,
          React, Node.js). I recently graduated from a Full Stack boot camp
          program at the University of Central Florida, where I honed my skills in both front-end and
          back-end development.
        </p>
        <p className="mt-4 text-lg leading-6 text-white-600">
          My journey into web development began after years of working in bar
          management at a restaurant. The problem-solving and multitasking
          skills I gained in the hospitality industry have proven to be
          valuable assets in my transition to software development. I've tackled various projects since starting this journey and am eager to embrace new challenges ahead!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
