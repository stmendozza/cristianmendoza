import { useState, useEffect } from "react";
import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";
import teams_1 from "../assets/img/teams/teams1.jpg";
import teams_2 from "../assets/img/teams/teams2.jpg";
import teams_3 from "../assets/img/teams/teams3.jpg";
import teams_4 from "../assets/img/teams/teams4.jpg";

// Datos de ejemplo de equipos de trabajo - puedes reemplazar con tus imágenes reales
const teamImages = [
  {
    id: 1,
    image: teams_1,
    translationKey: "empresa_a",
  },
  {
    id: 2,
    image: teams_2,
    translationKey: "empresa_b",
  },
  {
    id: 3,
    image: teams_3,
    translationKey: "empresa_c",
  },
  {
    id: 4,
    image: teams_4,
    translationKey: "empresa_d",
  },
];

export default function Teams() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === teamImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box id="teams" className="teams">
      <Typography variant="h2" className="teams__h2">
        {t("teams.title", "Equipos de Trabajo")}
      </Typography>

      <Box className="teams__carousel-container">
        {/* Card principal */}
        <Card className="teams__card">
          <CardMedia
            component="img"
            height="300"
            image={teamImages[currentIndex].image}
            alt={`Equipo de ${t(
              `teams.items.${teamImages[currentIndex].translationKey}.company`
            )}`}
            className="teams__image"
          />
          {/* Indicadores de puntos */}
          <Box className="teams__indicators">
            {teamImages.map((_, index) => (
              <Box
                key={index}
                className={`teams__indicator ${
                  index === currentIndex ? "teams__indicator--active" : ""
                }`}
                onClick={() => goToSlide(index)}
                role="button"
                tabIndex={0}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </Box>
          <CardContent className="teams__card-content">
            <Typography
              variant="body2"
              className="projects__p"
              style={{ textAlign: "center" }}
            >
              <b>
                {t(
                  `teams.items.${teamImages[currentIndex].translationKey}.company`
                )}
              </b>{" "}
              |{" "}
              {t(
                `teams.items.${teamImages[currentIndex].translationKey}.description`
              )}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
