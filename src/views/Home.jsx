import { lazy, Suspense } from "react";
import Grid from "@mui/material/Grid";
import { CircularProgress, Box } from "@mui/material";
import Header from "../components/Header";
import Title from "../components/Title";
import Teams from "../components/Teams";

// Lazy load heavy components
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));

// Loading component
const LoadingSpinner = () => (
  <Box display="flex" justifyContent="center" p={2}>
    <CircularProgress size={24} />
  </Box>
);

export default function Home() {
  return (
    <>
      <Grid container spacing={2} className="main">
        <Grid item xs={12} style={{ margin: "0 auto" }}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{ margin: "0 auto" }}>
          <Title />
          <Suspense fallback={<LoadingSpinner />}>
            <About/>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Skills/>
          </Suspense>
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{ margin: "0 auto" }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Teams />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Experience/>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Projects/>
          </Suspense>
        </Grid>
      </Grid>
    </>
  );
}
