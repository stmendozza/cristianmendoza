import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Grid container spacing={2} className="main">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Title />
          {/* <Menu /> */}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <About/>
          <Skills/>
          <Experience/>
          <Projects/>
        </Grid>
      </Grid>
    </>
  );
}
