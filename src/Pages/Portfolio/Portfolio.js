import { webProjectsData } from "../../Data/WebProjects/WebProjectsData";
import { researchProjectsData } from "../../Data/ResearchProjects/ResearchProjectsData";
import { gamedevProjectsData } from "../../Data/GameDevProjects/GamedevProjectsData";
import classes from "./Portfolio.module.css";
import SmallProject from "../../Components/SmallProject";
import LargeProject from "../../Components/LargeProject";

const PortfolioList = () => {
  return (
    <div className={classes.portfolioBody}>
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.projects}>
        <div className={classes.projectListTitle}>
          <h1>Webdev</h1>
        </div>
        <section className={classes.projectsList}>
          {webProjectsData.map((val, index) => {
            return (
              <div className={classes.projectListItem} key={index}>
                <div className={classes.projectSmall}>
                  <SmallProject props={val} />
                </div>
                <div className={classes.projectLarge}>
                  <LargeProject props={val} />
                </div>
              </div>
            );
          })}
        </section>
        <div className={classes.projectListTitle}>
          <h1>Research and Exercises</h1>
        </div>
        <section className={classes.projectsList}>
          {researchProjectsData.map((val, index) => {
            return (
              <div className={classes.projectListItem} key={index}>
                <div className={classes.projectSmall}>
                  <SmallProject props={val} />
                </div>
                <div className={classes.projectLarge}>
                  <LargeProject props={val} />
                </div>
              </div>
            );
          })}
        </section>
        <div className={classes.projectListTitle}>
          <h1>Gamedev</h1>
        </div>
        <section className={classes.projectsList}>
          {gamedevProjectsData.map((val, index) => {
            return (
              <div className={classes.projectListItem} key={index}>
                <div className={classes.projectSmall}>
                  <SmallProject props={val} />
                </div>
                <div className={classes.projectLarge}>
                  <LargeProject props={val} />
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
export default PortfolioList;
