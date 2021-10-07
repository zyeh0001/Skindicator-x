import HomeImage from "../components/HomePageCom/HomeImage";
import Section3 from "../components/Sections/Section3";
import TableauVisual from "../components/HomePageCom/TableauVisual";
// import Section3Topic from "../components/Sections/Section3Topic";
// import MapVisual from "../components/HomePageCom/MapVisual";
//import StatBanner from "../components/HomePageCom/StatBanner";
import GraphDesc from "../components/Sections/GraphDesc";
import PureParagraph from "../components/Sections/PureParagraph";
// import Banner from "../components/HomePageCom/Banner";
// import Delimiter from "../components/common/Delimiter";
// import MainNavigation from "../components/common/MainNavigation";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <HomeImage />
      <div className="featureR">
          <Link to="/medical-support" className="containerM">Medical disclaimer</Link>
          </div>
      <div className="container">
        <GraphDesc
          title="Why is there so much skin cancer in Australia?"
          text4="Skin cancer is one of Australia’s most common cancers.
          Skin cancer is primarily caused by excessive exposure to ultraviolet (UV) radiation from the sun, causing DNA damage to skin cells. If this damage is not repaired by the body’s internal DNA repair machinery, then faulty cell replication can occur – triggering the abnormal growth of cells – which eventually become cancer.
          "
        />
        <TableauVisual
          link="https://public.tableau.com/views/Sachida3/Dashboard3"
          height="50vh"
        />
        <PureParagraph text1="According to this line chart, we can clearly see the high incidence of skin cancer in Australia. In 2017, 45.3% of every 100,000 people developed skin cancer, nearly half! " />
        <div className="featureP">
        <Link to="/facts" className="button scrolly">Learn more about the facts</Link>
        </div>
      </div>

      <div className="container">
        <GraphDesc title="Time to take actions!" />
        <div className="row">
          <Section3
            title="Skin Protection"
            text="Do you know the condition of your skin? We can give you descriptions of each symptoms  and additional healthy tips."
            image="images/skinHealth.jpg"
            link="/protection-tips"
          />
          <Section3
            title="Self Check"
            text="You can check your skin at any time with just a few easy steps..."
            image="images/selfCheck.jpg"
            link="/self-check"
          />
          <Section3
            title="Medical support"
            text="From here, you can find out the nearest skin health clinic around you..."
            image="images/support.jpg"
            link="/medical-support"
          />
        </div>
        <div className="row">
          <Section3
            title="Symptoms"
            text="You can see three common skin cancers’ symptoms here and know more about them."
            image="images/symptomsHome.jpg"
            link="/symptoms"
          />
          <Section3
            title="Facts"
            text="Here are some visulizations, click me to know the facts of skin caner that you don’t know."
            image="images/factsHome.jpg"
            link="/facts"
          />
          <Section3
            title="Know your skin"
            text="Do you know what is skin ABCDEs? I will show you the definations of them"
            image="images/abcdeHome.jpg"
            link="/skin-protection-abcde"
          />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
