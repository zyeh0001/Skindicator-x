// import HomeImage from "../components/HomePageCom/HomeImage";
// import Section3 from "../components/Sections/Section3";
import HeaderImage from "../components/Sections/HeaderImage";
import TableauVisual from "../components/HomePageCom/TableauVisual";
// import Section3Topic from "../components/Sections/Section3Topic";
//import StatBanner from "../components/HomePageCom/StatBanner";
import GraphDesc from "../components/Sections/GraphDesc";
import PureParagraph from "../components/Sections/PureParagraph";
import Delimiter from "../components/common/Delimiter";
//import MainNavigation from "../components/common/MainNavigation";

function FactsPage() {
  return (
    <div>
      <HeaderImage image="images/facts.jpg" />
      <div className="containerH">
        <GraphDesc
          title="The fact below will show you the severity of skin cancer..."
          text4="Actually, only facts tell the truth,  we use some charts to show you guys the importance of skin cancer, Please keep them in mind"
        />
      </div>
      <Delimiter />
      <div className="containerH">
        <TableauVisual
          link="https://public.tableau.com/views/Sachida/Dashboard1"
          height="70vh"
        />
      </div>
      <div className="container pTop">
        <PureParagraph text1="As can be easily seen from the graph above, New South Wales has the highest incidence of skin cancer in Australia. The bright colors represent the number of recorded cases. We need to raise the awareness of Australians to protect their skin. I think it is not difficult to start from the small steps of using sunscreen in daily life! So what exactly should we do? You can follow our guide on how to protect your skin." />
      </div>
      <Delimiter />
      {/* <Banner image="images/banner.jpeg" /> */}
      {/* <div className="containerH">
        <GraphDesc
          title="Severity of skin cancer in middle-aged people"
          text4="The problem is that some Australians don't realise how serious skin cancer is and how important regular skin check-ups can be."
        />
        <TableauVisual
          link="https://public.tableau.com/views/Boo2_16315095714430/Dashboard12?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
          height="70vh"
        />
      </div>
      <div className="container pTop">
        <PureParagraph text1="With the development of science and technology, the incidence of skin cancer has skyrocketed in recent years, although the death rate has dropped. From the statistical representation of the graph above, one in 1,628 people will die of the disease by 2020. On the other hand, the risk of being diagnosed with skin cancer has also increased, with one in 64 people being diagnosed with skin cancer." />
      </div> */}
      <div>
      <img className="featurePoster"
            src="images/poster.png"
            alt=""
          />
        </div>
    </div>
  );
}
export default FactsPage;
