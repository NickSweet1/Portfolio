import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../constants/index";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
  };

  return (
    <section id="portfolio" className="background py-16">
      <div className="pl-5 pr-5 w-full mx-auto text-2xl md:w-1/2 md:pl-0 md:pr-0">
        <div>
          <p className="pb-5 pt-3 md:pb-3 border-olive border-4 rounded-lg text-beige pr-3 pl-4 text-center bg-tan bg-opacity-90">
            Welcome to my portfolio, where you can check out some cool projects
            I tackled during my Full Stack boot camp. These projects reflect
            different aspects of the course, and if you're curious for more
            details, just click on the project titles to the right!
          </p>
        </div>
      </div>

      <div className="grid cols-3 container mx-auto justify-center">
        <h1 className="text-4xl text-beige font-semibold mb-6 flex justify-center pt-10">
          Recent Works
        </h1>
        <div className="mx-auto w-9/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-olive border-solid p-4 bg-tan bg-opacity-90 rounded-xl transition duration-300 ease-in-out hover:bg-opacity-100 hover:shadow-2xl"
            >
              <div className="text-center text-white text-2xl pb-6">
                {project.title}
              </div>
              <div className="text-beige text-center">
                {project.description}
              </div>
              <div className="mx-auto grid grid-cols-2 w-1/2 justify-center mt-4">
                {project.video && (
                  <div className="flex mt-4">
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-beige flex items-center mx-auto"
                    >
                      <FontAwesomeIcon icon={faYoutube} className="fa-2x" />
                    </a>
                  </div>
                )}
                {project.link && (
                  <div className="flex mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-beige flex items-center mx-auto"
                    >
                      <FontAwesomeIcon
                        icon={faSquareGithub}
                        className="fa-2x"
                      />
                    </a>
                  </div>
                )}
                {project.sitelink && (
                  <div className="flex mt-4">
                    <a
                      href={project.sitelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-beige flex items-center mx-auto"
                    >
                      <FontAwesomeIcon icon={faGlobe} className="fa-2x" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
