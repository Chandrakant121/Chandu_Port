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
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import skinstore from "../../assets/skinstore.jpg"
import front from "../../assets/front.jpg"
import keep from "../../assets/keep.jpg"
import movie from "../../assets/movie.jpg"
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
                    src={keep}
                    alt="Keeper App"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>Keeper App</h2>
                <p>
                  This one is keeper app build
                  with the help of react, JavaScript, CSS & HTML. User can add, mark through line and delete notes.
                  I used local storage for storing the task.
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
                    href="https://keeper-app-csj.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Chandrakant121/Keeper-App.git"
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




          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    // src="https://images.ctfassets.net/3ouphkrynjol/f471af5e-f5b6-4074-abc2-6c8b41ba5232/3162d52421aeaa962b28e6506230a691/f471af5e-f5b6-4074-abc2-6c8b41ba5232.jpeg"
                    src={movie}
                    alt="Keeper App"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>React Movie App</h2>
                <p>
                  This one is Movie app build
                  with the help of react, JavaScript, CSS & HTML. User can see the rating, overview & img of movie. He can search the movie in search bar.
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
                    href="https://react-movie-app-csj.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Chandrakant121/React-Movie-App.git"
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



          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    // src="https://images.ctfassets.net/3ouphkrynjol/f471af5e-f5b6-4074-abc2-6c8b41ba5232/3162d52421aeaa962b28e6506230a691/f471af5e-f5b6-4074-abc2-6c8b41ba5232.jpeg"
                    src={front}
                    alt="FrontendMasters"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>FrontendMasters</h2>
                <p>
                  A cloned web application of FrontendMasters.com.
                  This is an E-learning platform for users to learn
                  various types of technology.
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
                    href="https://frontendmasters01.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/baluramk6/frontandmaster-clone.git"
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
                    href="https://skintone1.netlify.app/"
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


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://cdn.dribbble.com/users/2081/screenshots/6024594/snowflake_weather_app_icon_4x.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  Location based weather app. User can also search for their cities to see weather data of respective places.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://weatherapp-csj.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Chandrakant121/Weather_app.git"
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




          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>DropBox Clone -Backend</h2>
                <p>
                  Backend API for a google drive like app built using NodeJS,
                  Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                  operations for users, files and folders.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/imbickydutta/file-system-backend"
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

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
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

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
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
