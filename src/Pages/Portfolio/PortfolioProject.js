import React from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { gamedevProjectsData } from "../../Data/GameDevProjects/GamedevProjectsData";
import { researchProjectsData } from "../../Data/ResearchProjects/ResearchProjectsData";
import { webProjectsData } from "../../Data/WebProjects/WebProjectsData";

import BowToWowProject from "./Bowtowow";
import HopskotchProject from "./Hopskotch";
import GamedevProject from "./Gamedev";
import ProblemAnalysis from "./ProblemAnalysis";

const PortfolioProject = () => {
  const params = useParams();
  const projectId = parseInt(params.id, 10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const allmyProjects = [
    gamedevProjectsData,
    researchProjectsData,
    webProjectsData,
  ];
  const flatProjects = allmyProjects.flat();

  const project = flatProjects.find((e) => e.id === projectId);

  if (!project) {
    return <div>Project not found</div>; // Handle case where project isn't found
  }
  const GetSelectedProject = () => {
    if (project.id === 1) {
      return <BowToWowProject />;
    } else if (project.id === 2) {
      return <HopskotchProject />;
    } else if (project.id === 3) {
      return <ProblemAnalysis />;
    } else if (project.id === 6) {
      return <GamedevProject />;
    }
    return <div>No project found</div>;
  };
  return <div>{GetSelectedProject()}</div>;
};
export default PortfolioProject;
