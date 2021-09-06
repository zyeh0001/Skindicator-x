import ImageSection2 from "../components/Sections/ImageSection2";
import BulletList from "../components/Sections/BulletList";
import BulletParagraph from "../components/Sections/BulletParagraph";
import HeaderImage from "../components/Sections/HeaderImage";
import MainTopic from "../components/Sections/MainTopic";
import PureParagraph from "../components/Sections/PureParagraph";

function SymptomPage() {
  return (
    <div>
      <HeaderImage
        image="images/symptoms.jpg"
      />
<div className="featureP">
      <MainTopic
          title = "Differrent kinds of skin cancers" 
        />
      </div>

      <div className="containerP">
      <BulletParagraph
          text1="Basal cell carcinoma signs and symptoms"
          text2="Basal cell carcinoma usually occurs when you expose your skin in the sun, such as your neck or face, even your hands or legs."
      />
      <div className="row aln-center feature">
        <ImageSection2
        image = "images/sympGallery1.jpg"
        />
        <ImageSection2
        image = "images/sympGallery2.jpg"
        />
      </div>
      <BulletList
        description = "Usually, Basal cell carcinoma’s symptoms may appear as:"
        bullet1 = "· A pearly or waxy bump"
        bullet2 = "· A flat, flesh-colored or brown scar-like lesion"
        bullet3 = "· A bleeding or scabbing sore that heals and returns"
      />
      
      <BulletParagraph
          text1="Squamous cell carcinoma signs and symptoms"
          text2="Generally, squamous cell carcinoma occurs when you expose your skin in the sun, such as your face, ears and hands. Most of the time, squamous cell carcinoma develops in areas of your body that are exposed to the sun, such as your face, ears and hands. People with darker skin are more likely to develop squamous cell carcinoma in areas that are not often exposed to the sun."
      />
      <div className="row aln-center feature">
        <ImageSection2
        image = "images/sympGallery3.jpg"
        />
        <ImageSection2
        image = "images/sympGallery4.jpg"
        />
      </div>
      <BulletList
        description = "Usually, Squamous cell carcinoma’s symptoms may appear as: "
        bullet1 = "· A firm, red nodule"
        bullet2 = "· A flat lesion with a scaly, crusted surface"
      />

      <BulletParagraph
          text1 = "Melanoma signs and symptoms"
          text2 = "Melanoma can develop anywhere in your body, on otherwise normal skin or on moles that have become cancerous. Melanoma most often appears on the face or torso in men. In women, this type of cancer most often occurs in the lower legs. In both men and women, melanoma can occur on skin that is not exposed to the sun."
      />
      <PureParagraph
        text1 = "Melanoma can affect people of any skin color. For people with darker skin, melanomas tend to develop on the palms or soles of the feet, or under the nails or toenails."
      />
      <div className="row aln-center feature">
        <ImageSection2
        image = "images/sympGallery5.jpg"
        />
        <ImageSection2
        image = "images/sympGallery6.jpg"
        />
      </div>
      <BulletList
        description = "Melanoma’s symptoms include: "
        bullet1 = "· A large brownish spot with darker speckles"
        bullet2 = "· A mole that changes in color, size or feel or that bleeds"
        bullet3 = ". A small lesion with an irregular border and portions that appear red, pink, white, blue or blue-black"
        bullet4 = ". A painful lesion that itches or burns"
        bullet5 = ". Dark lesions on your palms, soles, fingertips or toes, or on mucous membranes lining your mouth, nose, vagina or anus"
      />
      </div>
    </div>
  );
}
export default SymptomPage;
