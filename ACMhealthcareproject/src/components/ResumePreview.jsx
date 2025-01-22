

const ResumePreview = ({ resumeData }) => {
    const handlePrint = () => {
      window.print();
    };
  
    return (
      <div className="bg-white p-4 rounded shadow">
        
        
        <div className="space-y-4">
          <h3 className="text-lg text-center font-bold">{resumeData.name || "Your Name"}</h3>

          <div className="flex items-center justify-center gap-5 flex-wrap text-center">

          <p>{resumeData.lkdn || "Linkedin"}</p>
          <p>{resumeData.gthb || "Github"}</p>
          <p>{resumeData.prtf || "Portfolio"}</p>
          <p>{resumeData.cnt || "Phone"}</p>
          <p>{resumeData.mail || "Email"}</p>
          </div>
          <div>
            <h4 className="font-bold text-center">Objective</h4>
            <p>{resumeData.objective || "Your Objective"}</p>
          </div>
          <div>
            <h4 className="font-bold">Skills</h4>
            <p>{resumeData.skills || "Your Skills"}</p>
          </div>
          <div>
            <h4 className="font-bold">Education</h4>
            <p>{resumeData.education || "Your Education"}</p>
          </div>
          <div>
            <h4 className="font-bold">Experience</h4>
            <p>{resumeData.experience || "Your Work Experience"}</p>
          </div>
        </div>
        <button
          onClick={handlePrint}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Print Resume
        </button>
      </div>
    );
  };
  
  export default ResumePreview;
  