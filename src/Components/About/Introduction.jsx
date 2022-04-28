import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/chandu.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hello, I am {" "}
                <span className="different">Chandrakant Santoshrao Joshi </span>  from{" "}
                <span className="different">
                  {" "}
                  Nanded, Maharashtra (India)
                </span>
                . I have completed my graduation in BE (Mechanical Engineering)
                from{" "}
                <span className="different">
                  MGM'S Coe Nanded (MH)
                </span>
                . Then I joined full stack web development course at{" "}
                <span className="different">Masai School</span> a military type
                coding school. I have hands on experience in {" "}
                <span className="different">Frontend</span>{" "} and {" "}
                <span className="different">Backend</span> technology with {" "}
                <span className="different">Data Structure & Algorithms.</span>
              </h4>
              <h4>Soft Skills :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Quick Learner{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Work{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Proactive{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Problem Solving{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
