import React, { useEffect } from "react";

function AIHW() {

  useEffect(() => {
    window.location.href = "https://www.aihw.gov.au/";
  }, []);

  return (
    <div className="containerP2">
      <h2>Jumping to https://www.aihw.gov.au/</h2>
    </div>
  );
}

export default AIHW;