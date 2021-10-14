import React, { useEffect } from "react";

import HeaderImage from "../components/Sections/HeaderImage";
import MainTopic from "../components/Sections/MainTopic";
import ThirdPartyService from "../components/Sections/ThirdPartyService";
import Clinic from "../components/MedicalSupportCom/NearByClinc";
import GraphDesc from "../components/Sections/GraphDesc";
export default MedicalSupportPage;

function MedicalSupportPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="featureP">
        <HeaderImage image="images/medicalSupport.png" />
        <div className="containerPink">
          <MainTopic title="Clinics around you" />
        </div>
        <div>
          <GraphDesc
            title="Map of skin care clinics in Victoria"
            text4="The map's markers reflect hospitals throughout Victoria. If you have not seen your GP, please go to the nearest clinic on the map for a skin examination."
          />
          <div className="featureB pHighlight">
            Note: Please click on your current location and the nearest clinic
            to get a navigation.
          </div>
        </div>
        <div>
          <Clinic />
        </div>

        <div className="containerPink">
          <MainTopic title="Get more help here" />
        </div>
      </div>
      <ThirdPartyService />
    </div>
  );
}
