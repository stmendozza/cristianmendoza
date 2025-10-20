import { Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about">  
      <Typography variant="body2" gutterBottom className="about__p">
        {t('about.bio1')}
      </Typography>
      <Typography variant="body2" gutterBottom className="about__p">
        {t('about.bio2')}
      </Typography>
      <Typography variant="body2" gutterBottom className="about__p">
        {t('about.bio3')}
      </Typography>
    </div>
  );
}
