import Section3Topic from "../components/Sections/Section3Topic";
import HeaderImage from "../components/Sections/HeaderImage";
import Section5 from "../components/Sections/Section5";
//import Banner from "../components/HomePageCom/Banner";
function AboutPage() {
  return (
    <div>
      <HeaderImage
        image = "images/teamLogoBanner.png"
      />
      <Section3Topic
        title="Our Story"
        text="Our team is committed to reminding Australians to take good care of their skin. We hope skin cancer will no longer be an Australian label and our project can contribute to it."
      />
      <Section3Topic
        title="Our Team"
        text="Our team members are all studying at Monash University, and are responsible for the development of different components according to their areas of expertise."
      />
      <div className="row aln-center">
        <Section5
          name="Charles"
          intro="Charles is the web developer in our team, with over 6 years’ experiences in operations, web development, project management, data analysis skills. Ability to adapt to high pressure environment and maintain high productivity."
          image="images/charles.png"
        />
        <Section5
          name="Sachi"
          intro="Sachi is the data analyst in our team, professional in data science with extensive experience in business intelligence, data visualization, and statistical modeling. Ability to solve business challenges and deliver desired outcomes."
          image="images/sachi.jpg"
        />
        <Section5
          name="Yixiang"
          intro="Yixiang is the UI/UX designer of the website, professional in business intelligence. Ability  to communicate with teammates to ensure high project standards"
          image="images/yixiang.jpg"
        />
        <Section5
          name="Ziwei"
          intro="Ziwei is a data scientist who has experience working on several data analytical projects. He is passionate about decoding values behind data by applying his knowledge of machine learning."
          image="images/ziwei.jpg"
        />
        <Section5
          name="Peihao"
          intro="Peihao is responsible for webpage design and implementation. Study in master of IT. Skill with front-end development"
          image="images/peihao.jpg"
        />
      </div>
    </div>
  );
}
export default AboutPage;
