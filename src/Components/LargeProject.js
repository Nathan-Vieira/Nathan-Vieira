import React from "react";
import classes from "../Pages/Portfolio/Portfolio.module.css";
import { Link } from "react-router-dom";

export const LargeProject = ({ props }) => {
  let val = props;
  return (
    <Link className={classes.projectLink} to={`/project/${val.id}`}>
      <div
        className={classes.project}
        style={{ backgroundImage: `url(${val.cardImg})` }}
      >
        <div className={classes.projectListCard} key={val.id}>
          <div className={classes.projectContents}>
            <p
              className={classes.projectName}
              style={{
                // backgroundColor: `${val.color02}`,
                color: `${val.cardTitleTxtColor}`,
              }}
            >
              {val.name}
            </p>
            <p
              className={classes.projectDesc}
              style={{
                backgroundColor: `${val.color02}`,
                color: `${val.descTxtColor}`,
              }}
            >
              {val.desc}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default LargeProject;
