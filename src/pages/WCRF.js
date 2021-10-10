import React, { useEffect } from "react";

function WCRF() {

  useEffect(() => {
    window.location.href = "https://www.wcrf.org/";
  }, []);

  return (
    <div className="containerP2">
      <h2>Jumping to https://www.wcrf.org/</h2>
    </div>
  );
}

export default WCRF;