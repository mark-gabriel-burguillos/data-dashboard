import React, { useEffect, useRef } from "react";

const { tableau } = window;

const Tableau = () => {
  const ref = useRef(null);
  const url =
    "https://public.tableau.com/views/Book1_16383773963890/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link&:device=desktop";

  function initViz() {
    new tableau.Viz(ref.current, url);
  }

  useEffect(() => {
    initViz();
  }, []);

  return <div ref={ref}></div>;
};

export default Tableau;
