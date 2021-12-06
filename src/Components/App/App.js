import React, { useState } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";
import SideBar from "../SideBar/SideBar";
import styles from "./App.module.css";

import "./App.css";
import Tableau from "../Tableau";

const tableauTables = [
  {
    TabName: "Top X directors by number of movies produced",
    Link: "https://prod-apnortheast-a.online.tableau.com/t/imdbdatahost/views/Official/TopDirectors?:origin=card_share_link&:embed=n",
  },
  {
    TabName: "Top X movie genres by number of movies",
    Link: "https://prod-apnortheast-a.online.tableau.com/t/imdbdatahost/views/Official/TopGenres?:origin=card_share_link&:embed=n",
  },
  {
    TabName: "Actor Dashboard",
    Link: "https://prod-apnortheast-a.online.tableau.com/t/imdbdatahost/views/Official/ActorDashboard?:origin=card_share_link&:embed=n",
  },
  {
    TabName: "Director Dashboard",
    Link: "https://prod-apnortheast-a.online.tableau.com/t/imdbdatahost/views/Official/DirectorDashboard?:origin=card_share_link&:embed=n",
  },
  {
    TabName: "Number of Movies per Director per Genre",
    Link: "https://prod-apnortheast-a.online.tableau.com/t/imdbdatahost/views/Official/NumberofMoviesperDirectorperGenre?:origin=card_share_link&:embed=n",
  },
  {
    TabName: "Number of Actors per Movie Genre per Director ID",
    Link: "https://prod-apnortheast-a.online.tableau.com/t/imdbdatahost/views/Official/NumberofActorsperMovieGenreperDirectorID?:origin=card_share_link&:embed=n",
  },
  {
    TabName: "Number of Movies per Genre in the Year X",
    Link: "https://prod-apnortheast-a.online.tableau.com/t/imdbdatahost/views/Official/NumberofMoviesperGenreintheYear?:origin=card_share_link&:embed=n",
  },
  {
    TabName: "Number of Movies of Genre W and X in years Y or Z",
    Link: "https://prod-apnortheast-a.online.tableau.com/t/imdbdatahost/views/Official/Dice?:origin=card_share_link&:embed=n",
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
