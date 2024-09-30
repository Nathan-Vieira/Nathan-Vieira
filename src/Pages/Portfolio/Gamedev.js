import React from "react";
import { gamedevProjectsData } from "../../Data/GameDevProjects/GamedevProjectsData";
import classes from "./Gamedev.module.css";

const GameDevProject = () => {
  const project = gamedevProjectsData.find((e) => e.id === 6);
  return (
   
      <div className="project-main">
        {/* <img
          className={`${classes.projectBanner}`}
          alt="cover"
          src={project.bannerImg}
          style={{}}
        /> */}
        <div className={`${classes.projectBody}`}>
          <div className={`${classes.projectHero}`}>
            <h1
              className={`${classes.projectTitle}`}
              style={{
                backgroundColor: `${project.color01}`,
                color: `${project.color03}`,
              }}
            >
              {project.name}
            </h1>
            <div className={`${classes.projectAbout}`}>{project.about}</div>
          </div>
          <div className={`${classes.projectOverview}`}>
            <div className={`${classes.projectOverviewContents}`}>
              {project.overView}
            </div>
          </div>
          <div className={`${classes.projectList}`}>
            <div className={`${classes.projectParent}`}>
              {project.media &&
                project.media.map((val, index) => {
                  return (
                    <div className={`${classes.projectSection}`} key={index}>
                      <div className={`${classes.projectMedia}`}>{val.src}</div>
                      <div className={`${classes.projectDescription}`}>
                        {val.description}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className={`${classes.projectFinal}`}>
              <h2>final thoughts...</h2>
              {project.finalThoughts}
            </div>
          </div>
        </div>
      </div>
  );
};
export default GameDevProject;
