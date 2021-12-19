import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { myExperiences } from "../Data";

function Experiences() {
  return (
    <div className="experiences">
      <h1>Experiences</h1>
      <Timeline position="alternate">
        {myExperiences.map((experience) => {
          return (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {experience.title}
                <p>
                  {experience.interval}
                  <br />
                  {experience.description}
                </p>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}

export default Experiences;
