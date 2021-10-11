import Section3Topic from "../components/Sections/Section3Topic";
import HeaderImage from "../components/Sections/HeaderImage";
import Section5 from "../components/Sections/Section5";
import React, { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderImage image="images/teamLogoBanner.png" />
      <Section3Topic
        title="Our Story"
        text="Our team consists of five persons with various technological backgrounds. We want to raise awareness about skin health among Australians, as it has become one of the country's major issues. The AI model for mole classification is one of the main features of our website that we are proud of. Skindicator-X is a free service platform that allows you to check your mole at any time and from any location. You can use our map tool in addition to the mole check; it will help you find the closest hospital to your location and provide a detailed driving route.
we are COMMITTED TO REMINDING AUSTRALIANS TO TAKE GOOD CARE OF THEIR SKIN. WE HOPE SKIN CANCER WILL NO LONGER BE AN AUSTRALIAN LABEL AND OUR PROJECT CAN CONTRIBUTE TO IT."
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
