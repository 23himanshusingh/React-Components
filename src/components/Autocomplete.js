import "../styles.css";
import React from "react";
import { useState, useEffect } from "react";

const Autocomplete = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const timer = setTimeout(fetchData, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const fetchData = async () => {
    if (input in cache) {
      console.log("cache returned");
      setResults(cache[input]);
      return;
    }
    console.log("API CALL");
    try {
      const response = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input
      );
      const data = await response.json();
      setResults(data.recipes);
      setCache((prevCache) => ({ ...prevCache, [input]: data.recipes }));
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  const handleClick = (val) => {
    setInput(val);
  };

  return (
    <div className="autocomplete">
      <h1>Autocomplete Search Bar</h1>
      <input
        type="text"
        className="input"
        value={input}
        onChange={handleChange}
        onFocus={handleShow}
        onBlur={handleHide}
      />
      <div className="result-container">
        {show &&
          results.map((item) => {
            return (
              <span
                className="result"
                key={item.id}
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Autocomplete;
