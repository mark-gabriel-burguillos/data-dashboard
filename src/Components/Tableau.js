import React, { useEffect, useRef } from "react";

const { tableau } = window;

const Tableau = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    initViz();
  }, [url]);

  function initViz() {
    new tableau.Viz(ref.current, url + "&:device=desktop");
  }

  return <div ref={ref} />;
};

export default Tableau;
