import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
// import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>

          <VerticalTimelineElement
            date={"28/11/2023 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Experience
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              The Metromax Group
            </h4>
            <p data-aos="fade-right">
              Experienced backend Node.js developer with two year of proven expertise. Skilled in designing, optimizing, and maintaining robust server-side applications. Collaborative team player with a focus on efficiency and code quality. Ready to contribute to impactful projects.
            </p>

          </VerticalTimelineElement>


          <VerticalTimelineElement
            date={"10/2021 – 05/2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School
            </h4>
            <p data-aos="fade-right">
              Joined Masai School which offers 30 weeks full time course on full stack web development program. At masai School I got hands-on experience to learn frontend and backend technologies along with DSA and Algo.

            </p>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"07/2016 – 07/2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [BE-Mechanical]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              MGM's College of Engineering, Nanded
            </h4>
            <p data-aos="fade-right">
              Graduated in BE Mechanical during 2020 from MGM'S Coe Nanded
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            date={"06/2014 – 06/2016"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [HSC]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Netaji Subhashchandra Bose College, Nanded
            </h4>
            <p data-aos="fade-right">
              Completed Higher Secondary School Certificate in Computer Science from NSB College, Nanded
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            // date={"06/2014 – 06/2016"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Internship
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Hindustan Aeronautics Limited (ARDC), Bangalore
            </h4>
            <p data-aos="fade-right">
              Completed Internship training at HAL ARDC, Banglore
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            // date={"06/2014 – 06/2016"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Courses
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >

            </h4>
            <p data-aos="fade-right">
              JAVA From Great Learning <br />
              HTML,CSS From Great Learning
            </p>
          </VerticalTimelineElement>


        </VerticalTimeline>
      </div>
    </>
  );
};
