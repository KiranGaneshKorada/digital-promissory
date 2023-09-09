import MainForm from "./MainForm";
import Navbar from "./Navbar";

function HeadComponent() {
  return (
    <>
      <div className="container-fluid  text-center px-0 mx-0">
        <div className="container-fluid row bg-info px-0 mx-0">
          <Navbar />
        </div>
        <div className="row px-0 ">
          <div className="col-3 bg-info bg-opacity-75 px-0">side bar</div>
          <div className="col bg-info bg-opacity-50 px-0"><MainForm/></div>
        </div>
      </div>
    </>
  );
}

export default HeadComponent;
