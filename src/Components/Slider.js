import React, { useState, useEffect } from "react";
import "../styles/slider.css";
import Content from "./Content";

const Slider = (props) => {
  // Current selected index of the person object in the person data array
  const [currentIndex, setCurrentIndex] = useState(0);
  // Current selected person object in the person data array
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    // Start slideshow
    // 5 seconds for each person
    if (props.slideshow) {
      if (currentIndex < props.data.length - 1) {
        const interval = setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, 5000);

        return () => {
          clearTimeout(interval);
        };
      } else {
        //  Start over from index 0 if the current index is greater
        // than the length of the person data array
        setTimeout(() => {
          setCurrentIndex(0);
        }, 5000);
      }
    }
  }, [currentIndex, props.data.length, props.slideshow]);

  useEffect(() => {
    // Set the current person based on index
    setCurrentItem(props.data[currentIndex]);
  }, [currentIndex, props.data]);

  const nextItem = () => {
    // Function that checks if the next selected index is greater
    // than the length of the data array
    if (currentIndex < props.data.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Sets the index back to 0
      setCurrentIndex(0);
    }
  };

  const previousItem = () => {
    // Function that checks if the selected value is not less than 0
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(props.data.length - 1);
    }
  };

  // Create Content component that will render the person's information
  const contentComponent = (
    <Content
      image={currentItem.picture}
      headerOne={currentItem.name}
      headerTwo={currentItem.position}
    >
      {currentItem.text}
    </Content>
  );

  return (
    <div className="container">
      {contentComponent}
      <div className="navigation-buttons">
        <button onClick={previousItem}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
          </svg>
        </button>
        <button onClick={nextItem}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
