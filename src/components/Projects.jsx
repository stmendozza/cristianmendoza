import { Box, Grid, Chip } from "@mui/material";
import Typography from "@mui/material/Typography";
import qinpecting from "../assets/img/qinpecting.png"
import bia from "../assets/img/bia.png"
import comercia_en_linea from "../assets/img/comercia_en_linea.png"
import blomi from "../assets/img/blomi.png"

export default function Project() {
  const projects = [
    {
      title: "Comercia en linea",
      position: "Full Stack Developer",
      description:
        "Migración y desarrollo frontend con React JS, recepción de entregas de requerimientos, validación y propuestas de diseño para mejorar al sistema en desarrollo.",
      image: comercia_en_linea,
      stack: [
        { name: "Vue - Nuxt" },
        { name: "Vuetify" },
        { name: "Node" },
        { name: "MongoDB" },
      ],
    },
    {
      title: "Blomi - Inside",
      position: "Full Stack Developer",
      description:
        "Migración y desarrollo frontend con React JS, recepción de entregas de requerimientos, validación y propuestas de diseño para mejorar al sistema en desarrollo.",
      image: blomi,
      stack: [
        { name: "Vue" },
        { name: "Vuetify" },
        { name: "Node" },
        { name: "AWS" },
        { name: "DynamoDB" },
      ],
    },
    
    {
      title: "Bia",
      position: "Full Stack Developer",
      description:
        "Migración y desarrollo frontend con React JS, recepción de entregas de requerimientos, validación y propuestas de diseño para mejorar al sistema en desarrollo.",
      image: bia,
      stack: [
        { name: "React" },
        { name: "Redux Toolkit" },
        { name: "Material UI" },
      ],
    },
    {
      title: "Qinspecting",
      position: "Full Stack Developer",
      description:
        "Migración y desarrollo frontend con React JS, recepción de entregas de requerimientos, validación y propuestas de diseño para mejorar al sistema en desarrollo.",
      image: qinpecting,
      stack: [
        { name: "Vue - Quasar" },
        { name: "Node - Express" },
        { name: "MySQL" },
      ],
    },
    
  ];

  return (
    <Box id="projects">
      <Typography className="projects__h2">Projectos</Typography>
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
                    {project.description}
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
