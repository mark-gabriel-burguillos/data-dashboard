import React, { useState } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";
import SideBar from "../SideBar/SideBar";
import styles from "./App.module.css";

import "./App.css";
import Tableau from "../Tableau";

const tableauTables = [
  {
    TabName: "Top X Actors by Number of Movies Involved With",
    Link: "https://public.tableau.com/views/Official_16387492955330/TopActors?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
  },
  {
    TabName: "Top X directors by number of movies produced",
    Link: "https://public.tableau.com/views/Official_16387492955330/TopDirectors?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
  },
  {
    TabName: "Top X movie genres by number of movies",
    Link: "https://public.tableau.com/views/Official_16387492955330/TopGenres?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
  },
  {
    TabName: "Actor History",
    Link: "https://public.tableau.com/shared/74JKNMJK2?:display_count=n&:origin=viz_share_link",
  },
  {
    TabName: "Director History",
    Link: "https://public.tableau.com/views/Official_16387492955330/DirectorDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
  },
  {
    TabName: "Number of Movies per Director per Genre",
    Link: "https://public.tableau.com/views/Official_16387492955330/NumberofMoviesperDirectorperGenre?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
  },
  {
    TabName: "Number of Actors per Movie Genre per Director ID",
    Link: "https://public.tableau.com/views/Official_16387492955330/NumberofActorsperMovieGenreperDirectorID?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
  },
  {
    TabName: "Number of Movies per Genre in the Year X",
    Link: "https://public.tableau.com/views/Official_16387492955330/NumberofMoviesperGenreintheYear?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
  },
  {
    TabName: "Number of Movies of Genre W and X in years Y or Z",
    Link: "https://public.tableau.com/views/Official_16387492955330/Dice?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
  },
];

const App = () => {
  const [selectedTableau, setTableauLink] = useState(tableauTables[0].Link);

  return (
    <div className={styles.App}>
      <NavigationBar />
      <div className={styles.Content}>
        <SideBar
          allTabs={tableauTables}
          selectedTab={selectedTableau}
          handleOnClickAction={(selection) => {
            setTableauLink(selection);
          }}
        />
        <div className={styles.Content__Dashboard}>
          <Tableau key={selectedTableau} url={selectedTableau} />
        </div>
      </div>
    </div>
  );
};

export default App;
