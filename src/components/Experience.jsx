import Timeline from "@mui/lab/Timeline";

import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";

export default function Experience() {
  const experience = [
    {
      title: "Full Stack Developer",
      company: "Parking International",
      description:
        "As a Full Stack developer I have found the challenge of working without the requirements defined as such and in a system that had apparently been in development for 2 to 3 years, but due to reprocessing and changes it had never been possible to reach a first version, me as the only developer doing front and back, with the help of other backs and working based on flow charts, meetings with the team and stakeholders, we have managed to get an MVP in a period of 6 months, after the team was making better decisions for the project.",
      date: "May 2023 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Macarenia Corp",
      description:
        "Migration and frontend development with React JS, receipt of requirements submissions, validation and design proposals to improve the system under development.",
      date: "Feb 2023 - May 2023",
    },
    {
      title: "Frontend Developer",
      company: "Appears",
      description:
        "Develop and restructure custom systems, web pages and landing pages for clients and the company itself, as well as sporadically support the design of user interfaces or redesign of system modules and the company's app.",
      date: "October 2020 - March 2023",
    },
    {
      title: "Software Developer",
      company: "El Tiempo Casa Editorial",
      description:
        "My functions were to support databases, create ETL's and migrate ETL's from one version of Visual Studio to another, test EL TIEMPO CASA EDITORIAL applications, load into test and production databases, design and development. . of user interfaces.",
      date: "December 2020 - June 2020",
    },
  ];

  return (
    <div id="experience">
      <Typography variant="h2" className="experience__h2">
        Experience
      </Typography>
      <Timeline
        sx={{
          padding: "0px",
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experience.map((exp, index) => (
          <TimelineItem key={index} sx={{ pl: "0px" }}>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CircleIcon className="experience__icon-circle" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ p: "0 0 30px 12px" }}>
              <Typography
                variant="p"
                component="span"
                className="experience__title"
              >
                {exp.title}
              </Typography>
              <Typography
                variant="p"
                component="p"
                className="experience__company"
              >
                {exp.company}
              </Typography>
              <Typography className="experience__description">
                {exp.description}
              </Typography>
              <Typography
                variant="p"
                component="p"
                className="experience__date"
              >
                {exp.date}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
