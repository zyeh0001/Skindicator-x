import HeaderImage from "../components/Sections/HeaderImage";
//import { image } from "d3-fetch";
import ImgTextSec1 from "../components/Sections/ImgTextSec1";
import MainTopic from "../components/Sections/MainTopic";
import Delimiter from "../components/common/Delimiter";


function HealthyTipsPage() {
  return (
    <div>
      <HeaderImage
        image="images/healthyTips.jpg"
      />
      <div className="featureP">
        <MainTopic
          title="Some healthy tips for your skin"
        />
      </div>
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="1. Use the correct cleanser for your skin type."
        text2="For oily or acne-prone skin, salicylic acid gel or benzoyl peroxide lotion works well. For dry, mature skin, use a moisturizing glycolic acid or creamy cleanser."
        image="images/tips1.jpg"
      />
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="2. Don’t use too many products."
        text2="Using multiple skin care products at the same time is a no-no. It's rough on the skin, leading to more pimples and clogged pores."
        image="images/tips2.jpg"
      />
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="3. Moisturize both day and night."
        text2="The best time to moisturize is right after showering and just before going to bed, avoiding heavily scented lotions and making sure you can find a moisturizer that is mild enough not to irritate daily use."
        image="images/tips3.jpg"
      />
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="4. Don’t touch your face."
        text2="It's important to figure out how to avoid touching your face. Not only does it spread bacteria and cause breakouts, it can also cause scarring, wrinkle and even cause the flu or other viruses."
        image="images/tips4.jpg"
      />
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="5. Avoid direct heat exposure."
        text2="Don't just pay attention to the sun -- getting too close to heaters and fireplaces can also wreaked havoc on your skin. It causes inflammation and breakdown of collagen."
        image="images/tips5.jpg"
      />
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="6. Vitamins should go on your skin, too."
        text2="A balanced diet is important, but there's more than one way to give your skin vitamins. Then there are topical antioxidants, which are essences and creams that contain skin-nourishing ingredients."
        image="images/tips6.jpg"
      />
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="7. Maintain a healthy diet."
        text2="Your skin has a natural moisturizing barrier, and the key to this barrier is omega-3 fatty acids. Adding flaxseeds or even walnuts to your salad gives an immediate boost to the production of omega-3 fatty acids, which in turn boosts your skin's ability to retain moisture. Make sure to limit foods high in the glycemic index (both simple and complex carbohydrates) in your diet."
        image="images/tips7.jpg"
      />
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="8. Wear sunscreen 365 days a year — rain or shine, indoors or out."
        text2="Many people feel they only need to protect themselves on sunny days or when they go to the beach. But the truth is, even while driving, flying or running errands, we need to protect our skin. It's daily exposure to ULTRAVIOLET light that causes visible signs of aging. Choose a broad-spectrum sunscreen with an SPF of 30 or greater, and remember to reapply it every two hours."
        image="images/tips8.jpg"
      />
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="9. Sun protection doesn't stop at sunscreen."
        text2="Sun protection is so important for your skin, preventing damage is a million times better than treating it afterwards"
        image="images/tips9.jpg"
      />
      <Delimiter
        image="images/goldenDelimiter.svg"
      />
      <ImgTextSec1
        text1="10. Sleep smarter."
        text2="It's not just a matter of sleeping eight hours a night. Using a clean silk pillowcase regularly is also good for your skin."
        image="images/tips10.jpg"
      />

    </div>
  );
}
export default HealthyTipsPage;
