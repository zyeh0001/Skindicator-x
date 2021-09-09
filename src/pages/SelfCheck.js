//import ImageUploading from "../components/ImageUploading";
import SelfCheckForm from "../components/SelfCheckForm";
import Upload from "../components/SelfCheckPageCom/Upload";

function SelfCheckPage() {
  return (
    <div>
      <div className="row aln-center feature">
        <Upload />
        <SelfCheckForm />
      </div>
    </div>
  );
}
export default SelfCheckPage;
