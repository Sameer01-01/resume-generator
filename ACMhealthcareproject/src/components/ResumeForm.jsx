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
            name="contact"
            placeholder="Contact Info"
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
      </div>
    );
  };
  
  export default ResumeForm;
  