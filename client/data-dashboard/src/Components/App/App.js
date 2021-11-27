import React, { useState } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";
import SideBarClosed from "../SideBarClosed/SideBarClosed";
import SideBarOpen from "../SideBarOpen/SideBarOpen";
import styles from "./App.module.css";

import "./App.css";

const App = () => {
  const [isSideBarOpen, handleSideBarOpen] = useState(true);

  return (
    <div className={styles.App}>
      <NavigationBar />
      <div className={styles.Content}>
        {isSideBarOpen ? (
          <SideBarOpen handleOnClickEvent={handleSideBarOpen} />
        ) : (
          <SideBarClosed handleOnClickEvent={handleSideBarOpen} />
        )}
      </div>
    </div>
  );
};

export default App;