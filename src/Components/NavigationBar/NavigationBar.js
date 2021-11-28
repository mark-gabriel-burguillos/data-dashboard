import React from "react";

import IMDbLogo from "../../Assets/IMDb_Logo.png";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.NavigationBar}>
      <img src={IMDbLogo} alt={"IMDb Logo"} />
      <span>The IMDb All-in-one Database Dashboard</span>
    </nav>
  );
};

export default NavigationBar;
