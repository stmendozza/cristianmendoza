export default function Menu() {
  return (
    <div className="menu">
      {/* Menu con marcadores para desplazamiento de anclaje a otras secciones */}
      <ul className="menu__nav">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
}
