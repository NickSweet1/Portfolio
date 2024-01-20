import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../constants/index"

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
  };

  const isMobile = window.innerWidth < 640;

  return (
    <section id="portfolio" className="background py-16">
      <div className="container mx-auto  flex justify-center">
        {isMobile ? (
          <div className="text-center">
            <h2 className="text-4xl text-beige font-semibold mb-6 flex justify-center">
              Projects
            </h2>
            <p className="m-5 border border-beige rounded-lg text-beige pt-1 pr-3 pl-4 pb-3 text-center bg-tan">
              Welcome to my portfolio, where you can check out some cool
              projects I tackled during my Full Stack boot camp. These projects
              reflect different aspects of the course, and if you're curious
              for more details, just click on the project titles below!
            </p>
            <ul>
              {projects.map((project, index) => (
                <li key={index} className="mb-4">
                  <h3
                    className={`text-xl text-beige font-semibold cursor-pointer m-5 ${
                      selectedProject === project
                        ? "border border-beige rounded p-2 bg-tan hover:shadow-lg hover:translate-x-0.5 hover:-translate-y-0.5"
                        : ""
                    }`}
                    onClick={() => handleProjectClick(index)}
                  >
                    {project.title}
                  </h3>
                  {selectedProject === project && (
                    <div className="border border-beige rounded-lg pt-1 pr-3 pl-3 pb-3 bg-tan m-5">
                      <p className="text-beige">{project.description}</p>
                      <h3 className="text-beige text-lg underline flex justify-center mt-6">
                        <a
                          className="pr-6"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faSquareGithub}
                            className="fa-2x text-beige"
                          />
                        </a>
                        {project.video && (
                          <a
                            className="pl-6"
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faYoutube}
                              className="fa-2x text-beige"
                            />
                          </a>
                        )}
                        {project.sitelink && (
                          <a
                            className="pl-6"
                            href={project.sitelink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faGlobe}
                              className="fa-2x text-beige"
                            />
                          </a>
                        )}
                      </h3>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row max-w-screen-lg">
            <div className="md:w-1/2 pr-12">
              {selectedProject ? (
                <div>
                  <h2 className="text-4xl text-beige font-semibold flex justify-center pb-6">
                    {selectedProject.title}
                  </h2>
                  <div className="border border-beige rounded-lg pt-1 pr-3 pl-3 pb-3 bg-tan">
                    <p className="text-beige">{selectedProject.description}</p>
                    <h3 className="text-beige text-lg underline flex justify-center mt-6">
                      <a
                        className="pr-6"
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faSquareGithub}
                          className="fa-2x text-beige"
                        />
                      </a>
                      {selectedProject.video && (
                        <a
                          className="pl-6"
                          href={selectedProject.video}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="fa-2x text-beige"
                          />
                        </a>
                      )}
                      {selectedProject.sitelink && (
                        <a
                          className="pl-6"
                          href={selectedProject.sitelink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faGlobe}
                            className="fa-2x text-beige"
                          />
                        </a>
                      )}
                    </h3>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-4xl text-beige font-semibold mb-6 flex justify-center">
                    Projects
                  </h2>
                  <p className="border border-beige rounded-lg text-beige pt-1 pr-3 pl-4 pb-3 text-center bg-tan">
                    Welcome to my portfolio, where you can check out some cool
                    projects I tackled during my Full Stack boot camp. These
                    projects reflect different aspects of the course, and if
                    you're curious for more details, just click on the project
                    titles to the right!
                  </p>
                </div>
              )}
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0 pl-12">
              <h1 className="text-4xl text-beige font-semibold mb-6 flex justify-center">
                Recent Works
              </h1>
              <ul className="text-center">
                {projects.map((project, index) => (
                  <li key={index} className="mb-4">
                    <h3
                      className="text-xl text-beige font-semibold cursor-pointer p-2"
                    >
                      <span className="border border-beige rounded p-2 bg-tan hover:shadow-lg hover:translate-x-0.5 hover:-translate-y-0.5"
                        onClick={() => handleProjectClick(index)}
                      >
                        {project.title}
                      </span>
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
