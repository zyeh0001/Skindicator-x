import ImageUploading from "../components/ImageUploading";
import SelfCheckForm from "../components/SelfCheckForm";
import Upload from "../components/SelfCheckPageCom/Upload";

function SelfCheckPage() {
  return (
    <div>
      <Upload />
      <div className="col-12">
        <ImageUploading />
        <SelfCheckForm />
      </div>
    </div>
  );
}
export default SelfCheckPage;
