import React, { useState } from "react";

const projects = [
  {
    title: "SQL Employee Tracker",
    link: "https://github.com/NickSweet1/SQL-Employee-Tracker",
    video: "https://drive.google.com/file/d/1eqmU_czspetV5ywkY922V9E9EqGC2Fod/view",
    description: "This is one of my first projects using SQL. The idea behind this project is to set up an SQL database and manipulate the data using CRUD (create, remove, update, and delete). This example uses an employee database. Please click one of the links below to get a better look!"
  },
  {
    title: "Project 2",
  },
  {
    title: "Project 3",
  },
  {
    title: "Project 4",
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
                <h2 className="text-3xl text-beige font-semibold mb-4 flex justify-center">
                  {selectedProject.title}
                </h2>
                <p className="text-beige">
                  {selectedProject.description}
                </p>
                <h3 className="text-beige text-lg underline flex justify-center mt-6">
                    <a className="pr-6" href={selectedProject.link}>Github</a>
                    {selectedProject.video && (
                    <a className="pl-6" href={selectedProject.video}>Video Demo</a>
                    )}
                </h3>
                {/* You can add more project details here */}
              </div>
            ) : (
              <div>
                <h2 className="text-4xl text-beige font-semibold mb-6 flex justify-center">
                  Projects
                </h2>
                <p className="text-beige">
                  Here, you can find some of the projects I completed during my Full
                  Stack boot camp. Some of these are focused on one aspect of the course. Please click on the project title to
                  the right to see more detailed information.
                </p>
              </div>
            )}
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 pl-12">
            <h1 className="text-4xl text-beige font-semibold mb-6 flex justify-center">Recent Works</h1>
            <ul className="border-r-2 border-t-2 border-b-2 border-beige rounded-lg">
              {projects.map((project, index) => (
                <li key={index} className="mb-4">
                  <h3 className="text-xl text-beige font-semibold flex justify-center cursor-pointer" onClick={() => handleProjectClick(index)}>
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