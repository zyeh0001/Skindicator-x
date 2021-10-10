import React from "react";

import ClinicMap from "../components/MedicalSupportCom/ClinicMap";
import HeaderImage from "../components/Sections/HeaderImage";
import MainTopic from "../components/Sections/MainTopic";
import Clinic from "../components/MedicalSupportCom/NearByClinc";

export default MedicalSupportPage;

function MedicalSupportPage() {
  return (
    <div className="featureP">
      <HeaderImage
        image="images/medicalSupport.png"
      />
      <MainTopic
        title="Clinics around you"
      />
      <div className="container">
        <ClinicMap />
      </div>
      <div className="containerPink">
        <MainTopic
          title="        Third-party services"
        />
        <div>
          <Clinic />

        </div>
      </div></div>
      );
    }