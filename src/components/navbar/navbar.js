import React, { useState } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

import "./styles.scss";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toogleTheme = () => {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "");
      localStorage.setItem("theme", "");
      setDarkMode(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="header">
      <header>
        <div className="container">
          <div className="flex flex--between">
            <div className="col" style={{ alignSelf: "center" }}>
              <span className="logo">Where in the world?</span>
            </div>
            <div className="col">
              <button className="dark-mode-btn" onClick={toogleTheme}>
                {darkMode ? (
                  <>
                    <FaMoon /> <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <FaRegMoon /> <span>Dark Mode</span>{" "}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
