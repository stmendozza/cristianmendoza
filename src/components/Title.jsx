import { Typography, Box, Grid } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import myPhoto from "../assets/img/cristian_mendoza.png";

export default function Title() {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const githubUrl = 'https://github.com/stmendozza';
  const instagramUrl = 'https://www.instagram.com/cris.mendoza.77/';
  const linkedInUrl = 'https://www.linkedin.com/in/stmendozza/';
  const whatsAppUrl = 'https://wa.link/wbbt5b';

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={2}>
          <img 
            src={myPhoto} 
            alt={t('about.name')} 
            className="title__photo"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            style={{ 
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
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
        </Grid>  
      </Grid>
    </Box>
  );
}
