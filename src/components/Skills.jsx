import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const categories = [
    { key: "skills.categories.languages", items: ["Javascript","Typescript","Python","SQL","HTML","CSS/Scss","BEM"] },
    { key: "skills.categories.frameworks", items: ["Vue.js","React.js","Express","Quasar","Vuetify","Material UI"] },
    { key: "skills.categories.tools", items: ["MongoDB","MySql","AWS","Git & Github","Jest","Postman"] },
    { key: "skills.categories.design", items: ["Figma","Desing UI","Prototyping"] },
  ];

  return (
    <div id="skills">
      <Typography variant="h2" className="skills__h2">
        {t("skills.title")}
      </Typography>
      <Grid container spacing={2} className="skills__grid">
        {categories.map((cat, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Typography variant="h3" className="skills__h3">
              {t(cat.key)}
            </Typography>
            {cat.items.map((name, idx) => (
              <Typography variant="body2" className="skills__p" key={idx}>
                {name}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
