// import ImageSection2 from "../components/Sections/ImageSection2";
import BulletList from "../components/Sections/BulletList";
import BulletParagraph from "../components/Sections/BulletParagraph";
import BlueBulletParagraph from "../components/Sections/BlueBulletParagraph";
import PurpleBulletParagraph from "../components/Sections/PurpleBulletParagraph";
import PinkBulletParagraph from "../components/Sections/PinkBulletParagraph";
import OrangeBulletParagraph from "../components/Sections/OrangeBulletParagraph";
import RedBulletParagraph from "../components/Sections/RedBulletParagraph";
import HeaderImage from "../components/Sections/HeaderImage";
import MainTopic from "../components/Sections/MainTopic";
import PureParagraph from "../components/Sections/PureParagraph";
import Delimiter from "../components/common/Delimiter";

function ABCDEsPage() {
  return (
    <div>
      <HeaderImage image="images/abcde.jpg" />
      <div className="featureP">
        <MainTopic title="Know your ABCDEs" />
      </div>
      <div className="containerP2">
        <PureParagraph text1="Dermatologists use the ABCDE method to classify melanoma. This method tells you what signs to look for when detecting melanoma." />
      </div>
      <div className="containerP">
        <BulletParagraph text1="The Melanoma Research Foundation provides a handy overview of the method you can reference when performing skin checks:" />
        <BlueBulletParagraph
          text1="A – Asymmetrical shape"
          text2="Melanoma lesions are often irregular, or not symmetrical, in shape. Benign moles are usually symmetrical."
        />
        <PurpleBulletParagraph
          text1="B – Border"
          text2="Typically, non-cancerous moles have smooth, even borders. Melanoma lesions usually have irregular borders that are difficult to define."
        />
        <PinkBulletParagraph
          text1="C – Color"
          text2="The presence of more than one color (blue, black, brown, tan, etc.) or the uneven distribution of color can sometimes be a warning sign of melanoma. Benign moles usually have a single shade of brown or tan."
        />
        <OrangeBulletParagraph
          text1="D – Diameter"
          text2="Melanoma lesions are often greater than 6 millimetres in diameter (approximately the size of a pencil eraser)."
        />
        <RedBulletParagraph
          text1="E – Evolution"
          text2="The evolution of your mole(s) has become the most critical factor to consider when it comes to diagnosing a melanoma. Knowing what is healthy for your body could save your life. If a mole has gone through recent changes in color or size, bring it to the attention of a dermatologist immediately."
        />
      </div>
      <Delimiter />
      <div className="featureP">
        <MainTopic title="What should I do if I get skin cancer?" />
      </div>
      <div className="containerP">
        <BulletList
          description="If you find a spot on your skin that could be skin cancer, it's time to see a dermatologist. Found early, skin cancer is highly treatable. Often a dermatologist can treat an early skin cancer by removing the cancer and a bit of normal-looking skin."
          bullet1="· Basal cell carcinoma can be excised surgically, and the cure rate is over 97%."
          bullet2="· The majority of cell carcinomas require surgical excision, and radiotherapy or chemotherapy is needed for advanced detection."
          bullet3=". Early melanin cancer can be excised with surgery, if already transferred to lymphatic or organ inside body, add chemical therapy or immune therapy even."
        />
      </div>
    </div>
  );
}
export default ABCDEsPage;
