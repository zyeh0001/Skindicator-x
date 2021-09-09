//import ImageUploading from "../components/ImageUploading";
import MainTopic from "../components/Sections/MainTopic";
import SelfCheckForm from "../components/SelfCheckForm";
import Upload from "../components/SelfCheckPageCom/Upload";

function SelfCheckPage() {
  return (
    <div>
      <div className="featureP">
        <MainTopic
          title="Write your detail and upload your spot image to get classification"
        />
      </div>
      <div className="row aln-center">
        <Upload />
        <SelfCheckForm />
      </div>
    </div>
  );
}
export default SelfCheckPage;
