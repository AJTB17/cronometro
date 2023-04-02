import Stopwatch from "./components/Stopwatch";
import "./App.css";
import DisplayBot from "./components/DisplayBot";
import Header from "./components/Header.jsx";
import { CronoProvider } from "./context/CronoProvider";

function App() {
  return (
    <>
      <Header />
      <CronoProvider>
        <Stopwatch />
        <DisplayBot />
      </CronoProvider>
    </>
  );
}

export default App;
