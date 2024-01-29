import { Typography } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function About() {
  const githubUrl = 'https://github.com/stmendozza';
  const instagramUrl = 'https://www.instagram.com/cris.mendoza.77/';
  const linkedInUrl = 'https://www.linkedin.com/in/stmendozza/';
  const whatsAppUrl = 'https://wa.link/wbbt5b';

  return (
    <div id="about">
      <Typography variant="h1" className="about__h1 ">
        Cristian Mendoza
      </Typography>
      <Typography variant="h2" className="about__h2">
        Full Stack Developer at Parking International
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
      Since 2016 I entered the world of software development, I always had a taste for technology, as well as a lot of curiosity about websites and how they work.
      </Typography>
      <Typography variant="body2" gutterBottom className="about__p">
      I currently work as a Full Stack developer, using technologies such as Vue.js, Vuetify, Node.js, JavaScript, MongoDB, AWS and Amazon DynamoDB. My main responsibility is to carry out the implementation of the project according to its requirements and the previously agreed design.
      </Typography>
      <Typography variant="body2" gutterBottom className="about__p">
      My focus is always on facing any challenge with the highest level of commitment, making proposals to meet each solution so that they make a difference. I really like being able to contribute something good and that each member of the team feels comfortable working with me in creating solutions.
      </Typography>
    </div>
  );
}
