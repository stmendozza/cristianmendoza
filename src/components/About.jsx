import { Typography } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const githubUrl = 'https://github.com/stmendozza';
  const instagramUrl = 'https://www.instagram.com/cris.mendoza.77/';
  const linkedInUrl = 'https://www.linkedin.com/in/stmendozza/';
  const whatsAppUrl = 'https://wa.link/wbbt5b';

  return (
    <div id="about">
      <Typography variant="h1" className="about__h1 ">
        {t('about.name')}
      </Typography>
      <Typography variant="h2" className="about__h2">
        {t('about.role')}
      </Typography>
      <ButtonGroup className="about__botton-group" >
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="about__botton">
          <GitHubIcon />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="about__botton">
          <InstagramIcon  />
        </a>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="about__botton">
          <LinkedInIcon />
        </a>
        <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="about__botton">
          <WhatsAppIcon style={{ color:'#2AD46A' }}/>
        </a>
      </ButtonGroup>
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
