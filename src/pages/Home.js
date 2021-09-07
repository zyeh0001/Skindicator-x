import HomeImage from "../components/HomePageCom/HomeImage";
import Section3 from "../components/Sections/Section3";
import TableauVisual from "../components/HomePageCom/TableauVisual";
// import Section3Topic from "../components/Sections/Section3Topic";
import MapVisual from "../components/HomePageCom/MapVisual";
import StatBanner from "../components/HomePageCom/StatBanner";
import GraphDesc from "../components/Sections/GraphDesc";
import Banner from "../components/HomePageCom/Banner";
function HomePage() {
  return (
    <div>
      <HomeImage />
      <div className="container">
        <GraphDesc
          title="Current distribution of cases in Australia"
          text3="As can be easily seen from the graph above, New South Wales has the highest incidence of skin cancer in Australia.
        The bright colors represent the number of recorded cases. We need to raise the awareness of Australians to protect their skin.
        I think it is not difficult to start from the small steps of using sunscreen in daily life!
        So what exactly should we do? You can follow our guide on how to protect your skin."
        />
        <MapVisual />
      </div>

      {/* <Banner image="images/banner.jpeg" /> */}
      <StatBanner />
      <div className="container">
        <GraphDesc
          title=" Each year, nearly 80% of all cancer cases in Australia are skin cancer
        cases."
          text4="The problem is that some Australians don't realise how serious skin cancer is and
        how important regular skin check-ups can be."
        />

        <TableauVisual
          link="https://public.tableau.com/views/Sachida2/Dashboard2"
          height="50vh"
        />
        <GraphDesc
          text3="With the development of science and technology, more and more people can survive the disease. But one of the oddities is that even though the death rate from skin cancer has gone down, the incidence of skin cancer has skyrocketed in recent years, which is quite shocking. Are we so dependent on modern technology that we neglect to protect ourselves?
From the above statistical representation of the line graph, we can observe that in 1982 people by the age of 60, there is 1 out of 86 people has a chance of getting diagnosed with skin cancer, whereas 1 out of 650 people was dying because of skin cancer.
As of 2020, the chance of death from skin cancer has decreased, with 1 out of 1628 individuals dying from the disease. On the other side, the risk of diagnosis has grown, with 1 out of 64 people being diagnosed with skin cancer."
        />
        <TableauVisual
          link="https://public.tableau.com/views/Sachida3/Dashboard3"
          height="50vh"
        />
        <TableauVisual
          link="https://public.tableau.com/views/Sachida4/Dashboard4"
          height="50vh"
        />
      </div>
      <Banner bannerTopic="Time to take actions!" />
      <div className="row aln-center">
        <Section3
          title="Skin Health"
          text="Do you know the condition of your skin? We can give you descriptions of each symptoms  and additional healthy tips."
          image="images/skinHealth.jpg"
          link="/symptom"
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
    </div>
  );
}
export default HomePage;
