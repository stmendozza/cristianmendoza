import { Box, Grid, Chip } from "@mui/material";
import Typography from "@mui/material/Typography";
import qinpecting from "../assets/img/qinpecting.png"
import bia from "../assets/img/bia.png"
import comercia_en_linea from "../assets/img/comercia_en_linea.png"
import blomi from "../assets/img/blomi.png"
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Project() {
  const { t } = useTranslation();
  const [loadedImages, setLoadedImages] = useState({});
  
  const projects = [
    {
      ...t("projects.items.comercia", { returnObjects: true }),
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
      ...t("projects.items.blomi", { returnObjects: true }),
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
      ...t("projects.items.bia", { returnObjects: true }),
      image: bia,
      stack: [
        { name: "React" },
        { name: "Redux Toolkit" },
        { name: "Material UI" },
      ],
    },
    {
      ...t("projects.items.qinspecting", { returnObjects: true }),
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

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <Box id="projects">
      <Typography className="projects__h2">{t("projects.title")}</Typography>
      <Grid container spacing={2} >
        {projects.map((project, index) => (
          <Box sx={{ flexGrow: 1 }} key={index} className="projects__box">
            <Grid container spacing={{xs: 2}} >           
              <Grid item xs={12} sm={4}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects__img"
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  style={{ 
                    opacity: loadedImages[index] ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
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
