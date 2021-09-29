import { Route, Switch } from "react-router-dom";
// import Todo from "./components/Todo";
// import Header from "./components/header";
// import Footer from "./components/footer";

import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import DisclaimerPage from "./pages/Disclaimer";
import HealthyTipsPage from "./pages/HealthyTips";
import FactsPage from "./pages/Facts";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import SelfCheckPage from "./pages/SelfCheck";
import SymptomPage from "./pages/Symptom";
import MedicalSupportPage from "./pages/MedicalSupport";
import ABCDEsPage from "./pages/ABCDEs";
import MainNavigation from "./components/common/MainNavigation";
import SymptomsNav from "./components/common/SymptomsNav";
import AboutUsNav from "./components/common/AboutUsNav";
import FactsNav from "./components/common/FactsNav";
import MedicalSupportNav from "./components/common/MedicalSupportNav";
import SelfCheckNav from "./components/common/SelfCheckNav";
// import CommonNavigation from "./components/common/CommonNavigation";
import SkinProtectionNav from "./components/common/SkinProtectionNav";
import Footer from "./components/common/footer";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/symptoms">
          <SymptomsNav />
          <SymptomPage />
        </Route>
        <Route path="/self-check">
          <SelfCheckNav />
          <SelfCheckPage />
        </Route>
        <Route path="/medical-support">
          <MedicalSupportNav />
          <MedicalSupportPage />
        </Route>
        <Route path="/" exact={true}>
          <MainNavigation />
          <HomePage />
        </Route>
        <Route path="/protection-tips">
          <SkinProtectionNav />
          <HealthyTipsPage />
        </Route>
        <Route path="/skin-protection-abcde">
          <SkinProtectionNav />
          <ABCDEsPage />
        </Route>
        <Route path="/facts">
          <FactsNav />
          <FactsPage />
        </Route>
        <Route path="/privacy-policy">
          <AboutUsNav />
          <PrivacyPolicyPage />
        </Route>
        <Route path="/our-team">
          <AboutUsNav />
          <AboutUsPage />
        </Route>
        <Route path="/medical-disclaimer">
          <AboutUsNav />
          <DisclaimerPage />
        </Route>
      </Switch>
      <div id="react-mount"></div>
      <Footer />
    </div>
  );
}

export default App;
