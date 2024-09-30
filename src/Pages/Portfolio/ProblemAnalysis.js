import React from "react";
import { researchProjectsData } from "../../Data/ResearchProjects/ResearchProjectsData";
import classes from "./ProblemAnalysis.module.css";

const ProblemAnalysisProject = () => {
  const project = researchProjectsData.find((e) => e.id === 3);
  return (
      <div className="project-main">
        <div className={`${classes.projectBody}`}>
          <div className={`${classes.projectHero}`}>
            <h1
              className={`${classes.projectTitle}`}
              style={{
                backgroundColor: `${project.color01}`,
                color: `${project.pageTitleTxtColor}`,
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
export default ProblemAnalysisProject;
