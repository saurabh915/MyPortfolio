import React from "react";
import "./Works.css";

import company from "../../img/company.png";

import Progneur from "../../img/Progneur.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands and Clients</span>
        <spane>
          <strong>MERN STACK INTERN</strong>
          <br />
          <strong>
            <strong>Progneur Technologies Jan 2023 - Apr 2023</strong>
          </strong>
          <br />
          Utilized Git and GitHub to create repositories and
          <br />
          manage version control for the project.
          <br />
          Front-end: ReactJs, CSS , Bootstrap , Material UI
          <br />
          Back-end: NodeJs , MongoDB, RESTful APIs
          <br />
          Worked on Project Management and Learning
          <br />
          Management Applications Module.
          <br />
          Managed and Integrated project APIs using Redux
          <br />
          Toolkit and Redux Thunk.
        </spane>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button s-button">Hire me</button>
        </Link>
        <div
          className="blur s-blur"
          style={{ background: "var(--purple" }}
        ></div>

        <div className="w-right">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }} //when it comes in view of 40% then it rotate
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img
                style={{ borderRadius: "100%", width: "300px" }}
                src={company}
                alt=""
              />
            </div>

            <div className="w-secCircle">
              <img
                style={{ borderRadius: "100%", width: "300px" }}
                src={company}
                alt=""
              />
            </div>

            <div className="w-secCircle">
              <img
                style={{ borderRadius: "100%", width: "300px" }}
                src={Progneur}
                alt=""
              />
            </div>

            <div className="w-secCircle">
              <img
                style={{ borderRadius: "100%", width: "300px" }}
                src={company}
                alt=""
              />
            </div>

            <div className="w-secCircle">
              <img
                style={{ borderRadius: "100%", width: "300px" }}
                src={company}
                alt=""
              />
            </div>
            {/* background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Works;
