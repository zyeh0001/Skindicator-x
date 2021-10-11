//import ImageUploading from "../components/ImageUploading";
import MainTopic from "../components/Sections/MainTopic";
import Upload from "../components/SelfCheckPageCom/Upload";
import { useEffect } from "react";

function SelfCheckPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="featureP">
        <MainTopic title="Write your detail and upload your spot image to get classification" />
      </div>
      <Upload />
    </div>
  );
}
export default SelfCheckPage;
