import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Stasio's Italian Deli",
    link: "https://github.com/NickSweet1/Stasios",
    sitelink:
      "https://stasios-7fcd485311cd.herokuapp.com/",
    description:
      "This website has a sleek design and covers everything about the menu, hours, and history. It's powered by a GraphQL database for that extra menu flair, and the manager can log in to make menu tweaks using CRUD (Create, Read, Update, Delete) operations.",
  },
  {
    title: "Mezcal Employee Portal",
    sitelink: "https://mezcal-book-580ae53d198b.herokuapp.com",
    link: "https://github.com/JoshuaVaneps/Mezcal-Book",
    description:
      "Our employee portal, powered by SQL databases, is designed to empower restaurant staff with seamless access to comprehensive information about our diverse range of spirits. It's a valuable resource for training, enhancing the guest experience, and boosting sales. Feel free to create an account to explore our tequila and mezcal databases!",
  },
  {
    title: "SQL Employee Tracker",
    link: "https://github.com/NickSweet1/SQL-Employee-Tracker",
    video:
      "https://drive.google.com/file/d/1eqmU_czspetV5ywkY922V9E9EqGC2Fod/view",
    description:
      "This project marks one of my early adventures into the world of SQL. The concept here is to create and manage an SQL database using CRUD operations (Create, Read, Update, and Delete). In this particular instance, I've crafted an employee database as an example. Feel free to explore further by clicking any of the links below to get a closer look!",
  },
  {
    title: "Instabook API",
    link: "https://github.com/NickSweet1/Instabook-API",
    video:
      "https://drive.google.com/file/d/1kVegxXUuWvxUN_vmwzz7hLfGGw--PTXT/view",
    description:
      "Welcome to my social media platform. It's like my little corner of the internet where users can connect, share posts, and chat. I've set up MongoDB to store user profiles, posts, and comments, and I've made it super easy to interact with the database using CRUD operations (Create, Read, Update, Delete). Although it's not a fully functioning site just yet, I've got the backend all set up and working seamlessly! If you'd like to see it in action, check out the video walkthrough—I'd love to show you around!",
  },
  {
    title: "Custom ReadMe Generator",
    link: "https://github.com/NickSweet1/Custom-Readme-Generator",
    video:
      "https://drive.google.com/file/d/1czSNL5Fw69sBzLzyxZEyvOw_dRGRyCpj/view",
    description:
      "This app was a game-changer during my bootcamp. It helps users create neat README files in Markdown format. You enter your details, and it does the rest, giving you a polished ReadMe.md file with a table of contents, badges, links, and more. It's like having a helpful documentation assistant!",
  },
  {
    title: "Styled Password Generator",
    link: "https://github.com/NickSweet1/Styled-Password-Generator",
    sitelink: "https://nicksweet1.github.io/Styled-Password-Generator/",
    description:
      "This project holds a special place as one of my earliest creations. It's a password generator that relies on user input to craft a unique password comprising letters, numbers, and symbols. While my design skills have evolved considerably since then, it's a fun journey back to where it all started. Feel free to give it a try and see how it all began!",
  },
];

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
