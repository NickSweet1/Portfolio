import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-olive text-beige text-center p-4 ">
      <div>
        <a href="https://github.com/NickSweet1" target="_blank">
            <FontAwesomeIcon className="pr-4 text-xl mx-auto" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/nicholas-sweet1/" target="_blank">
        <FontAwesomeIcon className="pr-4 text-xl mx-auto" icon={faLinkedin} />
        </a>
      </div>
      <div>
        <p className="text-xs">&copy;2023 Nick Sweet Dev</p>
      </div>
    </footer>
  );
}

export default Footer;
