import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="bg-tan text-beige text-center py-6">
      <div className="pb-3 flex flex-wrap justify-center items-center">
        <a href="https://github.com/NickSweet1" aria-label="Link to Github profile." target="_blank" rel="noopener norefferer">
            <FontAwesomeIcon className="hover:bg-cabbage hover:text-beige p-2 text-5xl mx-auto" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/nicholas-sweet1/" aria-label="Link to LinkedIn profile." target="_blank" rel="noopener norefferer">
        <FontAwesomeIcon className="hover:bg-cabbage hover:text-beige p-2 text-5xl mx-auto" icon={faLinkedin} />
        </a>
        <a href="https://leetcode.com/nicksweetj/" aria-label="Link to Leet Code profile." target="_blank" rel="noopener norefferer">
        <Icon icon="simple-icons:leetcode" className="hover:bg-cabbage hover:text-beige p-1 text-5xl mx-auto"/>
        </a>
      </div>
      <div>
        <p className="text-md">&copy;2023 Nick Sweet Dev</p>
      </div>
    </footer>
  );
}

export default Footer;
