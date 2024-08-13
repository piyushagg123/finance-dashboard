import React, { useState, useEffect } from "react";
import axios from "axios";
import getBaseUrl from "../services/connectionString";

const SearchBox = ({ checkExists, route, name }) => {
  const [param, setParam] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          getBaseUrl() + `api/${route}?name=${param}`
        );
        console.log("response");
        console.log(response);
        setSuggestions(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (param.length >= 1) {
      // Fetch suggestions only when length is 1 or more
      fetchSuggestions();
      setShowSuggestions(true);
    } else {
      setSuggestions([]); // Clear suggestions when length is less than 1
      setShowSuggestions(false);
    }
  }, [param]); // Re-run useEffect on param change

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setParam(event.target.value);
    checkExists(event);
  };

  const handleSuggestionClick = (suggestion) => {
    setSuggestions([]); // Clear suggestions on selection
    setShowSuggestions(false);
    setParam(suggestion);
    checkExists({
      target: {
        value: suggestion,
        name: name,
      },
    });
  };

  const handleClickOutside = (event) => {
    const searchBoxContainer = document.querySelector(".form-group"); // Adjust selector if needed
    if (searchBoxContainer && !searchBoxContainer.contains(event.target)) {
      setShowSuggestions(false); // Hide suggestions on click outside
    }
  };

  useEffect(() => {
    // Add event listener on component mount
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="form-group d-flex flex-nowrap align-items-center">
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-pill" // Rounded corners for a modern look
            id="param"
            value={param}
            name={name}
            onChange={handleInputChange}
            placeholder="Start typing..." // Add a placeholder for initial guidance
          />
          {isLoading && (
            <div className="input-group-append">
              <div className="input-group-text">
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="ms-2">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        {showSuggestions &&
          suggestions.length > 0 && ( // Only show suggestions when there are results
            <ul
              className="list-group dropdown-menu show shadow"
              style={{
                position: "absolute",
                marginLeft: "120px",
                maxWidth: "fit-content",
              }}
            >
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="list-group-item"
                  onClick={(e) => handleSuggestionClick(suggestion)}
                  value={suggestion}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
      </div>
    </>
  );
};

export default SearchBox;
