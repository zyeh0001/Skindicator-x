import React from "react";
<<<<<<< HEAD
import ClinicMap from "../components/MedicalSupportCom/ClinicMap";
import HeaderImage from "../components/Sections/HeaderImage";
import MainTopic from "../components/Sections/MainTopic";

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
      </div>
=======
import Clinic from "../components/MedicalSupportCom/NearByClinc";

function MedicalSupportPage() {
  return (
    <div>
      <Clinic />
>>>>>>> b9eb025c7a1c71ddb7d72407137c017cc22fb850
    </div>
  );
}
export default MedicalSupportPage;
