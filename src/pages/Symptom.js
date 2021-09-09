import ImageSection2 from "../components/Sections/ImageSection2";
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
import ImageSection1 from "../components/Sections/ImageSection1";
import Delimiter from "../components/common/Delimiter";

function SymptomPage() {
  return (
    <div>
      <HeaderImage
        image="images/symptoms.jpg"
      />
      <div className="featureP">
        <MainTopic
          title="Differrent kinds of skin cancers"
        />
      </div>
      <div className="containerP2">
        <PureParagraph
          text1="There are many types of skin cancer in the world, and if you don't know if your mole is a type of skin cancer, you can scroll down to find out more."
        />
      </div>
      <Delimiter
        image="images/blackDelimiter.svg"
      />
      <div className="containerP">
        <BulletParagraph
          text1="Basal cell carcinoma signs and symptoms"
          text2="Basal cell carcinoma usually occurs when you expose your skin in the sun, such as your neck or face, even your hands or legs."
        />
        <BulletList
          description="Usually, Basal cell carcinoma’s symptoms may appear as:"
          bullet1="· A pearly or waxy bump"
          bullet2="· A flat, flesh-colored or brown scar-like lesion"
          bullet3="· A bleeding or scabbing sore that heals and returns"
        />
        <div className="row aln-center feature">
          <ImageSection2
            image="images/sympGallery1.jpg"
          />
          <ImageSection2
            image="images/sympGallery2.jpg"
          />
        </div>
        <Delimiter
          image="images/blackDelimiter.svg"
        />
        <BulletParagraph
          text1="Squamous cell carcinoma signs and symptoms"
          text2="Generally, squamous cell carcinoma occurs when you expose your skin in the sun, such as your face, ears and hands. Most of the time, squamous cell carcinoma develops in areas of your body that are exposed to the sun, such as your face, ears and hands. People with darker skin are more likely to develop squamous cell carcinoma in areas that are not often exposed to the sun."
        />
        <BulletList
          description="Usually, Squamous cell carcinoma’s symptoms may appear as: "
          bullet1="· A firm, red nodule"
          bullet2="· A flat lesion with a scaly, crusted surface"
        />
        <div className="row aln-center feature">
          <ImageSection2
            image="images/sympGallery3.jpg"
          />
          <ImageSection2
            image="images/sympGallery4.jpg"
          />
        </div>
        <Delimiter
          image="images/blackDelimiter.svg"
        />
        <BulletParagraph
          text1="Melanoma signs and symptoms"
          text2="Melanoma can develop anywhere in your body, on otherwise normal skin or on moles that have become cancerous. Melanoma most often appears on the face or torso in men. In women, this type of cancer most often occurs in the lower legs. In both men and women, melanoma can occur on skin that is not exposed to the sun."
        />
        <PureParagraph
          text1="Melanoma can affect people of any skin color. For people with darker skin, melanomas tend to develop on the palms or soles of the feet, or under the nails or toenails."
        />
        <BulletList
          description="Melanoma’s symptoms include: "
          bullet1="· A large brownish spot with darker speckles"
          bullet2="· A mole that changes in color, size or feel or that bleeds"
          bullet3=". A small lesion with an irregular border and portions that appear red, pink, white, blue or blue-black"
          bullet4=". A painful lesion that itches or burns"
          bullet5=". Dark lesions on your palms, soles, fingertips or toes, or on mucous membranes lining your mouth, nose, vagina or anus"
        />
        <div className="row aln-center feature">
          <ImageSection2
            image="images/sympGallery5.jpg"
          />
          <ImageSection2
            image="images/sympGallery6.jpg"
          />
        </div>
      </div>
      <Delimiter
        image="images/blackDelimiter.svg"
      />
      <div className="featureP">
        <MainTopic
          title="Know your ABCDEs"
        />
      </div>
      <div className="containerP2">
        <PureParagraph
          text1="Dermatologists use the ABCDE method to classify melanoma. This method tells you what signs to look for when detecting melanoma."
        />
      </div>
      <ImageSection1
        image="images/abcde.jpg"
      />
      <div className="containerP">
        <BulletParagraph
          text1="The Melanoma Research Foundation provides a handy overview of the method you can reference when performing skin checks:"
        />
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
      <Delimiter
        image="images/blueDelimiter.svg"
      />
      <div className="featureP">
        <MainTopic
          title="What should I do if I get skin cancer?"
        />
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
export default SymptomPage;
