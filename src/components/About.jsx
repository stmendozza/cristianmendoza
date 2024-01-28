import { Typography } from "@mui/material";

export default function About() {
  return (
    <div id="about">
      <Typography variant="h1" className="about__h1">
        Cristian Mendoza
      </Typography>
      <Typography variant="h2" className="about__h2">
        Full Stack Developer at Parking International
      </Typography>
      <Typography variant="body2" gutterBottom className="about__p">
        Since 2017 I entered the world of software development, I always had a
        love for technology, as well as a lot of curiosity about websites and
        how they worked.
      </Typography>
      <Typography variant="body2" gutterBottom className="about__p">
      Currently, I work as a Full Stack Developer, utilizing a variety of
        technologies such as Vue.js, Vuetify, Node.js, JavaScript, AWS, and
        Amazon DynamoDB. My primary responsibility is to carry out project
        implementation according to the previously agreed-upon design.
      </Typography>
      <Typography variant="body2" gutterBottom className="about__p">
        Mi enfoque no se limita solo a escribir código; se extiende a la
        creatividad y la innovación. Me encanta enfrentar desafíos tecnológicos
        y encontrar soluciones que marquen la diferencia. Mi trabajo implica
        pensar de manera creativa y transformar ideas en productos digitales que
        generen asombro y entusiasmo.
      </Typography>
    </div>
  );
}
