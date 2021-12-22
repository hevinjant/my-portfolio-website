import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { reversedMyExperiences } from "../Data";

function Experiences() {
  return (
    <>
      <span className="anchor-experiences" id="section-experiences"></span>
      <div className="experiences">
        <h1>Experiences</h1>
        <Timeline className="timeline" position="alternate">
          {reversedMyExperiences.map((experience) => {
            return (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="experiences-content">
                    <p className="experience-title">{experience.title}</p>
                    <div className="experience-info">
                      <div className="location-info">
                        <LocationOnIcon />
                        <p>{experience.location}</p>
                      </div>
                      <div className="interval-info">
                        <AccessTimeIcon />
                        <p>{experience.interval}</p>
                      </div>
                    </div>
                    <p className="experience-description">
                      {experience.description}
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </>
  );
}

export default Experiences;
