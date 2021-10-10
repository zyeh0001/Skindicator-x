import React, { useEffect } from "react";

function SkinVision() {

  useEffect(() => {
    window.location.href = "https://www.skinvision.com/";
  }, []);

  return (
    <div className="containerP2">
      <h2>Jumping to https://www.skinvision.com/</h2>
    </div>
  );
}

export default SkinVision;