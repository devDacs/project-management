import { Project } from "@/state/api";
import React from "react";
import Header from "../Header";
import { format } from "date-fns";

type Props = {
  project: Project;
};

const ProjectCard = ({
  project: { name, description, startDate, endDate },
}: Props) => {
  const formattedStartDate = startDate && format(new Date(startDate), "P");
  const formattedEndDate = endDate && format(new Date(endDate), "P");

  return (
    <div className="rounded border p-4 shadow">
      <Header name={name} isSmallText />
      <p>{description}</p>
      <p>
        {formattedStartDate} - {formattedEndDate}
      </p>
    </div>
  );
};

export default ProjectCard;
