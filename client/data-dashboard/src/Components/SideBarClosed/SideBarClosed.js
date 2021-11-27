import React, { useState } from "react";

import Hamburger from "../../Assets/Hamburger.png";
import styles from "./SideBarClosed.module.css";

const SideBarClosed = ({ handleOnClickEvent }) => {
  return (
    <aside className={styles.SideBarClosed}>
      <img
        src={Hamburger}
        alt={"Open Sidebar"}
        onClick={() => handleOnClickEvent(true)}
      />
    </aside>
  );
};

export default SideBarClosed;
