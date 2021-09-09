import { Route, Switch } from "react-router-dom";
// import Todo from "./components/Todo";
// import Header from "./components/header";
// import Footer from "./components/footer";

import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import DisclaimerPage from "./pages/Disclaimer";
import HealthyTipsPage from "./pages/HealthyTips";
import SelfCheckPage from "./pages/SelfCheck";
import SymptomPage from "./pages/Symptom";
import MedicalSupportPage from "./pages/MedicalSupport";
import MainNavigation from "./components/common/MainNavigation";
import Footer from "./components/common/footer";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/about-us">
          <AboutUsPage />
        </Route>
        <Route path="/disclaimer">
          <DisclaimerPage />
        </Route>
        <Route path="/healthy-tips">
          <HealthyTipsPage />
        </Route>
        <Route path="/self-check">
          <SelfCheckPage />
        </Route>
        <Route path="/symptom">
          <SymptomPage />
        </Route>
        <Route path="/medical-support">
          <MedicalSupportPage />
        </Route>
      </Switch>
      <div id="react-mount"></div>
      <Footer />
    </div>
  );
}

export default App;
