import './App.css';
import Intro from "./screens/Intro/Intro";
import {useEffect, useState} from "react";
import Home from "./screens/Home/Home";

function App() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntro(false)
    }, 2000)
  }, []);
  return (
    <div className="App">
      {
        intro ? (
          <Intro />
        ) : (
          <Home />
        )
      }
    </div>
  );
}

export default App;
