import React, { useEffect } from "react";

function HTML5() {

  useEffect(() => {
    window.location.href = "https://html5up.net/";
  }, []);

  return (
    <div className="containerP2">
      <h2>Jumping to https://html5up.net/</h2>
    </div>
  );
}

export default HTML5;