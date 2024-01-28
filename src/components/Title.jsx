// import { Typography } from "@mui/material";
import CristianMendoza from "../assets/img/cristian_mendoza.png"

export default function Title() {
  return (
    <div className="title">
       <img
          src={CristianMendoza}
          alt="Cristian Mendoza"
          id="my_photo_img"
        />
      {/* <Typography variant="h1" className="title__h1">
        Cristian Mendoza
      </Typography>
      <Typography variant="h2" className="title__h2">
        Full Stack Developer at Parking International
      </Typography>
      <Typography variant="body2" className="title__p">
        Currently, I work as a Full Stack Developer, utilizing a variety of
        technologies such as Vue.js, Vuetify, Node.js, JavaScript, AWS, and
        Amazon DynamoDB. My primary responsibility is to carry out project
        implementation according to the previously agreed-upon design.
      </Typography> */}
    </div>
  );
}
