import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNestjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import skinstore from "../../assets/skinstore.jpg"
import kohls from "../../assets/kohls.jpg"
import front from "../../assets/front.jpg"
import food from "../../assets/food.jpg"
import flipkart from "../../assets/flipkart.jpg"
import bingo from "../../assets/bingo.png"
import lmd from "../../assets/lmd.png"
import movie from "../../assets/movie.jpg"
import casino from "../../assets/casino2.jpeg"
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    // src="https://images.ctfassets.net/3ouphkrynjol/f471af5e-f5b6-4074-abc2-6c8b41ba5232/3162d52421aeaa962b28e6506230a691/f471af5e-f5b6-4074-abc2-6c8b41ba5232.jpeg"
                    src={bingo}
                    alt="Keeper App"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>Bingo Bash</h2>
                <p>
                  My main tasks were handling server-to-server calls,
                  managing user information, and creating secure payloads for smooth communication with the Scopely server.
                  I played a crucial role in ensuring fast and secure data transfer.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiNestjs />
                  <FaReact />
                  <SiMaterialui />
                </div>

                <div>
                  <a
                    href="https://www.bingobash.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                  // href=""
                  // target="_blank"
                  // rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ====== */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    // src="https://images.ctfassets.net/3ouphkrynjol/f471af5e-f5b6-4074-abc2-6c8b41ba5232/3162d52421aeaa962b28e6506230a691/f471af5e-f5b6-4074-abc2-6c8b41ba5232.jpeg"
                    src={lmd}
                    alt="Keeper App"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>LMD</h2>
                <p>
                  Facilitated the onboarding of a
                  transportation company, handling vehicle data, driver details, and trip scheduling. Implemented a user-friendly
                  system, showcasing proficiency in full-stack development and project management.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiNestjs />
                  <FaReact />
                  <SiMaterialui />
                </div>

                <div>
                  <a
                    href="https://dev.lmd.innowyze.in/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                  // href=""
                  // target="_blank"
                  // rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* ========= */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    // src="https://images.ctfassets.net/3ouphkrynjol/f471af5e-f5b6-4074-abc2-6c8b41ba5232/3162d52421aeaa962b28e6506230a691/f471af5e-f5b6-4074-abc2-6c8b41ba5232.jpeg"
                    src={casino}
                    alt="Casino"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>Casino</h2>
                <p>
                  In my recent project, I led server-to-server communications, managed user data, and designed secure payload strategies for seamless Scopely server interactions. My focus on optimizing data transfer efficiency highlighted my commitment to both speed and security.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiNestjs />
                  <FaReact />
                  <SiMaterialui />
                </div>

                <div>
                  <a
                  // href="https://dev.lmd.innowyze.in/login"
                  // target="_blank"
                  // rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                  // href=""
                  // target="_blank"
                  // rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ======== */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={food}
                    alt="Keeper App"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>Food App</h2>
                <p>
                  Welcome to the Food App, a comprehensive platform designed to enhance your online food ordering experience. This app combines a user-friendly interface with powerful functionalities to ensure a seamless and enjoyable experience for users.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiHtml5 />
                  <SiMongodb />
                  <DiCss3 />
                  {/* <FaReact /> */}
                  {/* <SiMaterialui /> */}
                </div>

                <div>
                  <a
                    href="https://github.com/Chandrakant121/Swiggy.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Chandrakant121/Swiggy.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* ======== */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    // src="https://images.ctfassets.net/3ouphkrynjol/f471af5e-f5b6-4074-abc2-6c8b41ba5232/3162d52421aeaa962b28e6506230a691/f471af5e-f5b6-4074-abc2-6c8b41ba5232.jpeg"
                    src={flipkart}
                    alt="Flipkart App"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>Flipkart Clone</h2>
                <p>
                  It’s my major project where I've used MERN stack to make the clone of Flipkart website along with backend integration. Tech stacks used react,redux, express, Mongoose, MongoDB, MaterialUI.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiHtml5 />
                  <SiMongodb />
                  <DiCss3 />
                  <FaReact />
                  <SiMaterialui />
                </div>

                <div>
                  <a
                    href="https://flipkartchandu.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Chandrakant121/Flipkart"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* ======== */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    // src="https://www.chicmoey.com/wp-content/uploads/2019/11/SkinStore-Black-Friday-2019-596x450.png"
                    src={skinstore}
                    alt="SkinStore"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>SkinStore</h2>
                <p>
                  A cloned web application of SkinStore.com which
                  provides a number of products including hair care,
                  cosmetics and fragrance. A number of brands are available.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://github.com/murali0101/Skin-Store-Construct-Week-Project.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/murali0101/Skin-Store-Construct-Week-Project.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ========= */}
          {/* 
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={kohls} alt="kohls" />
                </div>
              </div>
              <div className="project_information">
                <h2>React Kohls App</h2>
                <p>
                  A cloned web application of kohls.com which is react app & provides a number of products
                  like Mens Cloth, Women Cloth and Kids etc. A number of brands are avilable.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://kohls-cj.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Chandrakant121/Kohl-s_App.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
};
