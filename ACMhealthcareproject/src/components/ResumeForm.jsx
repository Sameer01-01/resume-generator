import { Link } from "react-router-dom";

const ResumeForm = ({ setResumeData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <hr />
        <div>

          <div className="flex justify-center items-center gap-3">


            <input
              type="text"
              name="lkdn"
              placeholder="LinkedIn"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="gthb"
              placeholder="GitHub"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />


            <input
              type="text"
              name="prtf"
              placeholder="Portfolio"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="cnt"
              placeholder="Contact"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />

            <input
              type="text"
              name="mail"
              placeholder="Email"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

        </div>


        <textarea
          name="intro"
          placeholder="Define Yourself"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />


<div>
          <textarea
            name="skillsl1"
            placeholder="Skills (comma separated)"
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="skillsl2"
            placeholder="Skills (comma separated)"
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="skillsl3"
            placeholder="Skills (comma separated)"
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>

          <textarea
            name="clgname"
            placeholder="College"
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="education"
            placeholder="Degree and branch"
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="grdyear"
            placeholder="start year"
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="grdyear2"
            placeholder="end year"
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>



        <textarea
          name="experience"
          placeholder="Work Experience"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </form>

      <div className="flex justify-center items-center mt-4">
        <button className="bg-blue-500 flex justify-center items-center text-white py-2 px-4 rounded">
          <Link to="/resume-preview">Generate Resume</Link>
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
