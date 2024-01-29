import { Box, Grid, Chip } from "@mui/material";
import Typography from "@mui/material/Typography";
import qinpecting from "../assets/img/qinpecting.png"
import bia from "../assets/img/bia.png"
import comercia_en_linea from "../assets/img/comercia_en_linea.png"
import blomi from "../assets/img/blomi.png"

export default function Project() {
  const projects = [
    {
      title: "Comercia en linea (Trade Online)",
      position: "Analyst - Designer - Full Stack Developer - Tester - Devops - WaterBoy",
      description:
        "Analysis, design, development, implementation, testing, maintenance and support, this project is my author and I created it in order to go through different phases of software development learning and fully maintaining my general knowledge of the software development life cycle software.",
      image: comercia_en_linea,
      stack: [
        { name: "Vue" },
        { name: "Nuxt" },
        { name: "Vuetify" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "Figma" },
      ],
    },
    {
      title: "Blomi - Inside",
      position: "Full Stack Developer",
      description:
        "Development of inside, a system for the administrative management of the Parking International company that is developed at the same time as other technological proposals such as end customer App, operator App, corporate client platform.",
      image: blomi,
      stack: [
        { name: "Vue" },
        { name: "Vuex" },
        { name: "Express" },
        { name: "AWS" },
        { name: "DynamoDB" },
      ],
    },
    
    {
      title: "Bia",
      position: "Front End Developer",
      description:
        "Migration and frontend development with React JS, receipt of requirements submissions, validation and design proposals to improve the system under development.",
      image: bia,
      stack: [
        { name: "React" },
        { name: "Redux Toolkit" },
        { name: "Material UI" },
      ],
    },
    {
      title: "Qinspecting",
      position: "Front End Developer",
      description:
        "General style adjustments due to UI/UX restructuring, in addition to implementation of modules such as notifications, training, adjustment in the authentication module and creation of the service website.",
      image: qinpecting,
      stack: [
        { name: "Vue" },
        { name: "Quasar" },
        { name: "Vuex" },
        { name: "Flutter" },
        { name: "XD" }
      ],
    },
    
  ];

  return (
    <Box id="projects">
      <Typography className="projects__h2">Projects</Typography>
      <Grid container spacing={2} >
        {projects.map((project, index) => (
          <Box sx={{ flexGrow: 1 }} key={index} className="projects__box">
            <Grid container spacing={{xs: 2}} >           
              <Grid item xs={12} sm={4}>
                {/* <Card className="projects__card" > */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__img"
                  />
                {/* </Card> */}
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box >
                  <Typography variant="h3" className="projects__h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="projects__p">
                   <b>{project.position}</b> |  {project.description}
                  </Typography>
                  <Box className="projects__stack">
                    {project.stack.map((item, index) => (
                      <Chip
                        sx={{ mt: "10px", mr: "5px" }}
                        size="small"
                        label={item.name}
                        key={index}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
