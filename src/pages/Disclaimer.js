import HeaderImage from "../components/Sections/HeaderImage";
import BulletParagraph from "../components/Sections/BulletParagraph";
import PureParagraph from "../components/Sections/PureParagraph";
import MainTopic from "../components/Sections/MainTopic";
import Postscripts from "../components/Sections/Postscripts";

function DisclaimerPage() {
  return (
    <div>
      <HeaderImage
        image = "images/disclaimer.jpg"
      />
      <div className="featureP">
      <Postscripts
          text1 = "If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at ylin0078@student.monash.edu. Our Disclaimer was generated with the help of the Disclaimer Generator. " 
        />
      <MainTopic
          title = "Disclaimer for Skindicator" 
        />
      </div>
      <div className="containerP">
        
        <PureParagraph
          text1="All the information on this website - https://www.skindicator.ga/ - is published in good faith and for general information purpose only. Skindicator does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Skindicator), is strictly at your own risk. Skindicator will not be liable for any losses and/or damages in connection with the use of our website. "
        />
        <PureParagraph
          text1="From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'. "
        />
        <PureParagraph
          text1='Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information. '
        />
        <BulletParagraph
          text1="Consent"
          text2="By using our website, you hereby consent to our disclaimer and agree to its terms. "
        />
        <BulletParagraph
          text1="Update"
          text2="Should we update, amend or make any changes to this document, those changes will be prominently posted here."
        />
      </div>
    </div>
  );
}
export default DisclaimerPage;
