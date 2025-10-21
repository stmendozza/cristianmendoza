import "./assets/css/styles.css";
import Home from "./views/Home";
import { usePerformance } from "./hooks/usePerformance";

function App() {
  usePerformance();
  return <Home />;
}

export default App;
