import React, { useState } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";
import SideBar from "../SideBar/SideBar";
import styles from "./App.module.css";

import "./App.css";
import Tableau from "../Tableau";

const App = () => {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <div className={styles.Content}>
        <SideBar />
        <div className={styles.Content__Dashboard}>
          <Tableau />
        </div>
      </div>
    </div>
  );
};

export default App;
