import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t } = useTranslation();
  return (
    <div className="menu">
      {/* Menu con marcadores para desplazamiento de anclaje a otras secciones */}
      <ul className="menu__nav">
        <li>
          <a href="#about">{t("menu.about")}</a>
        </li>
        <li>
          <a href="#skills">{t("menu.skills")}</a>
        </li>
        <li>
          <a href="#experience">{t("menu.experience")}</a>
        </li>
        <li>
          <a href="#projects">{t("menu.projects")}</a>
        </li>
      </ul>
    </div>
  );
}
