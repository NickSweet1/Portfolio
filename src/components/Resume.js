import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlassCitrus, faHandsHoldingChild, faCode, faGraduationCap, faArrowUp, faFileArrowDown } from "@fortawesome/free-solid-svg-icons"; 

function Resume() {
  return (
    <div className="background flex">
      <a
      href="/images/resume.docx"
      download  // This attribute specifies that the target will be downloaded when a user clicks on the hyperlink
      className="fa-2x text-white flex"
    >
        < FontAwesomeIcon icon={faFileArrowDown} className="fa-2x text-beige pl-5 pt-5"/>
        </a>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work text-beige"
          contentStyle={{ background: "#b9925e", color: "#ede69b", boxShadow: "2px 2px 2px rgb(237, 230, 155)"}}
          date="March 2023 - October 2023"
          iconStyle={{ background: "#b9925e", color: "#fff"}}
          icon={<FontAwesomeIcon icon={faCode} />}
        >
          <h3 className="vertical-timeline-element-title text-white">Full-Stack Boot Camp</h3>
          <h4 className="vertical-timeline-element-subtitle text-white">
            University of Central Florida
          </h4>
          <p>A 6 month Full-Stack web development course that focused on the MERN stack comprised of weekly classes, modules, individual and group projects, and voluntary continuation courses.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-beige"
          contentStyle={{ background: "#b9925e", color: "#ede69b", boxShadow: "2px 2px 2px rgb(237, 230, 155)"}}
          date="2017 - Present"
          iconStyle={{ background: "#b9925e", color: "#fff"}}
          icon={<FontAwesomeIcon icon={faMartiniGlassCitrus} />}
        >
          <h3 className="vertical-timeline-element-title text-white">Bar Manager</h3>
          <h4 className="vertical-timeline-element-subtitle text-white">
            Reyes Mezcaleria, Orlando, FL
          </h4>
          <p>Managed a bar program which specializes in craft coktails, mezcals, and a unique dining experience along with a virtual employee portal for training purposes.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-beige"
          contentStyle={{ background: "#b9925e", color: "#ede69b", boxShadow: "2px 2px 2px rgb(237, 230, 155)"}}
          date="2016 - 2017"
          iconStyle={{ background: "#b9925e", color: "#fff"}}
          icon={<FontAwesomeIcon icon={faHandsHoldingChild} />}
        >
          <h3 className="vertical-timeline-element-title text-white">Interdisciplinary Internship</h3>
          <h4 className="vertical-timeline-element-subtitle text-white">
            Feeding Children Everywhere, Longwood, FL
          </h4>
          <p>Traversed the nation to collaborate with corporations and charitable organizations in the efficient packaging of food supplies for the underserved and disadvantaged populations. Contributed to large-scale initiatives encompassing the preparation of millions of meals to address the needs of those facing food insecurity. While stationed at the central hub, I actively engaged in overseeing logistical operations and coordination.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-beige"
          contentStyle={{ background: "#b9925e", color: "#ede69b", boxShadow: "2px 2px 2px rgb(237, 230, 155)"}}
          date="2012 - 2017"
          iconStyle={{ background: "#b9925e", color: "#fff"}}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title text-white">Bachelors of Science</h3>
          <h4 className="vertical-timeline-element-subtitle text-white">
            University of Central Florida
          </h4>
          <p>Graduated with a Bachelors of Science and Interdisciplinary Studies.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#b9925e", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faArrowUp} />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Resume;
