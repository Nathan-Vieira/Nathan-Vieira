import React from "react";
import classes from "../Pages/Portfolio/Portfolio.module.css";
import { Link } from "react-router-dom";

const SmallProject = ({ props }) => {
  let val = props;
  return (
    <Link className={classes.projectLink} to={`/project/${val.id}`}>
      <div
        className={classes.projectSmall}
        style={{ backgroundImage: `url(${val.cardImgSmall})`, height: "200px" }}
      />
      <div className={classes.projectListCard} key={val.id}>
        <div className={classes.projectSmallContents}>
          <p
            className={classes.projectName}
            style={{
              // backgroundColor: `${val.color02}`,
              color: `${val.smallCardTitleTxtColor}`,
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
    </Link>
  );
};
export default SmallProject;
