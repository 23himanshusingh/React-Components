import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [width, setWidth] = useState(0);

  const handleInc = () => {
    setWidth((prev) => {
      return prev + 10 <= 100 ? prev + 10 : 100;
    });
  };
  const handleDec = () => {
    setWidth((prev) => {
      return prev - 10 >= 0 ? prev - 10 : 0;
    });
  };
  const updateProgress = () => {
    const ele = document.getElementById("testBgColor");
    if (width < 40) {
      ele.style.backgroundColor = "red";
    } else if (width >= 40 && width <= 79) {
      ele.style.backgroundColor = "orange";
    } else if (width >= 80 && width <= 100) {
      ele.style.backgroundColor = "green";
    }
  };
  useEffect(() => {
    updateProgress();
  }, [width]);
  return (
    <div>
      <h2>Progress Bar</h2>
      <div
        style={{
          border: "1px solid",
          height: "35px",
          width: "475px",
          "border-radius": "10px",
          overflow: "hidden",
          "margin-left": "5px",
          "margin-top": "10px",
          "margin-bottom": "20px",
          "background-color": "gray",
          position: "relative",
        }}
      >
        <div
          id="testBgColor"
          style={{
            width: `${width}%`,
            height: "100%",
            "background-color": "blue",
            color: "white",
            display: "flex",
            "align-items": "center",
            transition: "width 1s ease-in-out,background-color 1s ease-in-out",
          }}
        >
          <p
            style={{
              position: "absolute",
              left: "50%",
            }}
          >{`${width}%`}</p>
        </div>
      </div>
      <span>
        <button style={{ margin: "10px" }} onClick={handleInc}>
          +10%
        </button>
        <button onClick={handleDec}>-10%</button>
      </span>
    </div>
  );
}

export default ProgressBar;
