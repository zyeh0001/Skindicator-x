import React from "react";

import HeaderImage from "../components/Sections/HeaderImage";
import MainTopic from "../components/Sections/MainTopic";
import ThirdPartyService from "../components/Sections/ThirdPartyService";
import Clinic from "../components/MedicalSupportCom/NearByClinc";

export default MedicalSupportPage;

function MedicalSupportPage() {
  return (
    <div>
      <div className="featureP">
        <HeaderImage image="images/medicalSupport.png" />
        <div className="containerPink">
          <MainTopic title="Clinics around you" />
        </div>
        <div>
          <Clinic />
        </div>

        <div className="containerPink">
          <MainTopic title="Third-party services" />
        </div>
      </div>
      <ThirdPartyService />
    </div>
  );
}
