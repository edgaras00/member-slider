import React, { useState } from "react";
import Slider from "./Components/Slider";
import personData from "./data.js";
import "./styles/app.css";

const App = () => {
  // Start or stop slide show
  const [startSlideShow, setStartSlideShow] = useState(false);
  const toggleSlideShow = () => {
    setStartSlideShow((prevState) => !prevState);
  };

  return (
    <div className="app">
      <Slider data={personData} slideshow={startSlideShow} />
      <br />
      <button onClick={toggleSlideShow} className="slideshow">
        {startSlideShow ? "End Slide Show" : "Start Slide Show"}
      </button>
    </div>
  );
};

export default App;
