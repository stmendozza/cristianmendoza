import { Grid, Typography } from "@mui/material";

export default function Skills() {
  const skills = [
    {
      title: "Languages",
      skills: [
        { name: "Javascript" },
        { name: "Typescript" },
        { name: "Python" },
        { name: "SQL" },
        { name: "HTML" },
        { name: "CSS/Scss" },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Vue.js" },
        { name: "React.js" },
        { name: "Express" },
        { name: "Quasar" },
        { name: "Vuetify" },
        { name: "Material UI" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "AWS" },
        { name: "Git & Github" },
        { name: "MySql" },
        { name: "DBeaver" },
        { name: "Jest" },
        { name: "Postman" },
      ],
    },
    {
      title: "Desing",
      skills: [
        { name: "Figma" },
        { name: "Desing UI" },
        { name: "Prototyping" },
      ],
    },
  ];

  return (
    <div id="skills">
      <Typography variant="h2" className="skills__h2">
        Skills
      </Typography>
      <Grid container spacing={2} className="skills__grid">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Typography variant="h3" className="skills__h3">
              {skill.title}
            </Typography>
            {skill.skills.map((item, index) => (
              <Typography variant="body2" className="skills__p" key={index}>
                {item.name}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
