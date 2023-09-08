import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
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
  {
    title: "Project 5",
  },
  {
    title: "Project 6",
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(projects[index]);
  };

  return (
    <section id="portfolio" className="bg-olive py-16">
      <div className="container mx-auto  flex justify-center">
        <div className="flex flex-col md:flex-row max-w-screen-lg">
          <div className="md:w-1/2 pr-12">
            {selectedProject ? (
              <div>
                <h2 className="text-4xl text-beige font-semibold flex justify-center pb-6">
                  {selectedProject.title}
                </h2>
                <div className="border border-beige rounded-lg pt-1 pr-3 pl-3 pb-3">
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
                        rel="noopener norefferer"
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
                        rel="noopener norefferer"
                      >
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="fa-2x text-beige"
                        />
                      </a>
                    )}
                  </h3>
                </div>
                {/* You can add more project details here */}
              </div>
            ) : (
              <div>
                <h2 className="text-4xl text-beige font-semibold mb-6 flex justify-center">
                  Projects
                </h2>
                <p className="border border-beige rounded-lg text-beige pt-1 pr-3 pl-4 pb-3">
                  Here, you can find some of the projects I completed during my
                  Full Stack boot camp. Some of these are focused on one aspect
                  of the course. Please click on the project title to the right
                  to see more detailed information.
                </p>
              </div>
            )}
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 pl-12">
            <h1 className="text-4xl text-beige font-semibold mb-6 flex justify-center">
              Recent Works
            </h1>
            <ul className="border border-beige rounded-lg">
              {projects.map((project, index) => (
                <li key={index} className="mb-4">
                  <h3
                    className="text-xl text-beige font-semibold flex justify-center cursor-pointer p-2"
                    onClick={() => handleProjectClick(index)}
                  >
                    {project.title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
