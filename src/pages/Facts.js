import HomeImage from "../components/HomePageCom/HomeImage";
import Section3 from "../components/Sections/Section3";
import HeaderImage from "../components/Sections/HeaderImage";
import TableauVisual from "../components/HomePageCom/TableauVisual";
// import Section3Topic from "../components/Sections/Section3Topic";
import MapVisual from "../components/HomePageCom/MapVisual";
//import StatBanner from "../components/HomePageCom/StatBanner";
import GraphDesc from "../components/Sections/GraphDesc";
import PureParagraph from "../components/Sections/PureParagraph";
import MainTopic from "../components/Sections/MainTopic";
import Banner from "../components/HomePageCom/Banner";
import Delimiter from "../components/common/Delimiter";
//import MainNavigation from "../components/common/MainNavigation";


function FactsPage() {
  return (
    <div>
      <HeaderImage
        image="images/facts.jpg"
      />
      <div className="container">

        <GraphDesc
        title = "The fact below will show you the severity of skin cancer..." 
          text4="Actually, only facts tell the truth,  we use some charts to show you guys the importance of skin cancer, Please keep them in mind"
        />
      </div>
      <Delimiter/>
      <div className="container">
        <GraphDesc
          title="Skin cancer distribution map of Australia"
          text4="Each year, nearly 80% of all cancer cases in Australia are skin cancer cases."
        />
        <TableauVisual
            link="https://public.tableau.com/views/Sachida/Dashboard1"
            height="70vh"
        />
        <PureParagraph
          text1="As can be easily seen from the graph above, New South Wales has the highest incidence of skin cancer in Australia. The bright colors represent the number of recorded cases. We need to raise the awareness of Australians to protect their skin. I think it is not difficult to start from the small steps of using sunscreen in daily life! So what exactly should we do? You can follow our guide on how to protect your skin."
        />
      </div>
      <Delimiter/>
      {/* <Banner image="images/banner.jpeg" /> */}
      <div className="container">
        <GraphDesc
          title="Severity of skin cancer in middle-aged people"
          text4="The problem is that some Australians don't realise how serious skin cancer is and how important regular skin check-ups can be."
        />
        <TableauVisual
          link="https://public.tableau.com/views/Sachida2/Dashboard2"
          height="40vh"
        />
        <PureParagraph
          text1="With the development of science and technology, more and more people can survive the disease. But one of the oddities is that even though the death rate from skin cancer has gone down, the incidence of skin cancer has skyrocketed in recent years, which is quite shocking. Are we so dependent on modern technology that we neglect to protect ourselves?
From the above statistical representation of the line graph, we can observe that in 1982 people by the age of 60, there is 1 out of 86 people has a chance of getting diagnosed with skin cancer, whereas 1 out of 650 people was dying because of skin cancer.
As of 2020, the chance of death from skin cancer has decreased, with 1 out of 1628 individuals dying from the disease. On the other side, the risk of diagnosis has grown, with 1 out of 64 people being diagnosed with skin cancer."
        />
      </div>
      
    </div>
  );
}
export default FactsPage;
