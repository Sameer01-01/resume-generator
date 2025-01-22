import { Link } from "react-router-dom";

const ResumeForm = ({ setResumeData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
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
        <textarea
          name="objective"
          placeholder="Objective"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="skills"
          placeholder="Skills (comma separated)"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="education"
          placeholder="Education"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="experience"
          placeholder="Work Experience"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </form>

      <div className="mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          <Link to="/resume-preview">Generate Resume</Link>
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
