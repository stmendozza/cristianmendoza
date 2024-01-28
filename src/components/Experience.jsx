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
        "Migración y desarrollo frontend con React JS, recepción de entregas de requerimientos, validación y propuestas de diseño para mejorar al sistema en desarrollo.",
      date: "May 2023 - Present",
    },

    {
      title: "Full Stack Developer",
      company: "Appears",
      description:
        "Migración y desarrollo frontend con React JS, recepción de entregas de requerimientos, validación y propuestas de diseño para mejorar al sistema en desarrollo.",
      date: "October 2020 - March 2023",
    },
    {
      title: "Software Developer",
      company: "El Tiempo Casa Editorial",
      description:
        "Migración y desarrollo frontend con React JS, recepción de entregas de requerimientos, validación y propuestas de diseño para mejorar al sistema en desarrollo.",
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
