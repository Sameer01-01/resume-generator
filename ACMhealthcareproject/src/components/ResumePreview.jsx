

const ResumePreview = ({ resumeData }) => {
    const handlePrint = () => {
      window.print();
    };
  
    return (
      <div className="bg-white p-4 rounded shadow">
        
        
        <div className="space-y-4">
          <h3 className="text-3xl text-center font-bold">{resumeData.name || "Your Name"}</h3>

          <hr />

          <div className="flex items-center justify-center gap-5 flex-wrap text-center">

          <p> <a className="hover:underline" href={resumeData.lkdn}>Linkedin</a> </p>
          <p> <a href={resumeData.gthb}>Github</a> </p>
          <p><a href={resumeData.prtf}>Portfolio</a></p>
          <p className="hover:underline">{resumeData.cnt || "Phone"}</p>
          <p className="hover:underline">{resumeData.mail || "Email"}</p>
          </div>
          <hr />

          <div>
            <h4 className="font-bold text-center">Objective</h4>
            <p>{resumeData.intro || "Your Introduction"}</p>
          </div>

          <hr />
          <div>
            <h4 className="font-bold">Skills</h4>
            <p>{resumeData.skillsl1 || "Your Skills"}</p>
            <p>{resumeData.skillsl2}</p>
            <p>{resumeData.skillsl3}</p>
          </div>

          <hr />


          <div>
            <h4 className="font-bold">Education</h4>
            <p>{resumeData.clgname || "Your College"}</p>
            <p>{resumeData.education || "Your Education"}  <span>{resumeData.grdyear}</span> - {resumeData.grdyear2} </p>
          </div>
          


          <div>
            <h4 className="font-bold">Experience</h4>
            <p>{resumeData.experience || "Your Work Experience"}</p>
          </div>
        </div>


        <div className="flex justify-center items-center">

        <button
          onClick={handlePrint}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
          Print Resume
        </button>
          </div>
      </div>
    );
  };
  
  export default ResumePreview;
  