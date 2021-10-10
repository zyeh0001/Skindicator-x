import React, { useEffect } from "react";

function CancerConcil() {

  useEffect(() => {
    window.location.href = "https://www.cancer.org.au/";
  }, []);

  return (
    <div className="containerP2">
      <h2>Jumping to https://www.cancer.org.au/</h2>
    </div>
  );
}

export default CancerConcil;