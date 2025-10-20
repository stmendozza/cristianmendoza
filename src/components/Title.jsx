// import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import myPhoto from "../assets/img/cristian_mendoza.png";

export default function Title() {
  const { t } = useTranslation();
  return (
    <div className="title">
      <img id="my_photo_img" src={myPhoto} alt={t('about.name')} className="floating" />
      {/* <Typography variant="h3" className="title__h3">
        {t('about.role')}
      </Typography> */}
    </div>
  );
}
