import { Link } from "react-router-dom";
import { useState } from "react";

const ResumeForm = ({ setResumeData }) => {
  const [experienceFields, setExperienceFields] = useState([{ id: 1, value: "" }]);
  const [projectFields, setProjectFields] = useState([{ id: 1, value: "" }]);
  const [achievementFields, setAchievementFields] = useState([{ id: 1, value: "" }]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleExperienceChange = (id, value) => {
    const updatedExperiences = experienceFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setExperienceFields(updatedExperiences);
    setResumeData((prevData) => ({
      ...prevData,
      experiences: updatedExperiences.map((field) => field.value),
    }));
  };

  const handleProjectChange = (id, value) => {
    const updatedProjects = projectFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setProjectFields(updatedProjects);
    setResumeData((prevData) => ({
      ...prevData,
      projects: updatedProjects.map((field) => field.value),
    }));
  };

  const handleAchievementChange = (id, value) => {
    const updatedAchievements = achievementFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setAchievementFields(updatedAchievements);
    setResumeData((prevData) => ({
      ...prevData,
      achievements: updatedAchievements.map((field) => field.value),
    }));
  };

  const addExperienceField = () => {
    setExperienceFields([...experienceFields, { id: Date.now(), value: "" }]);
  };

  const removeExperienceField = (id) => {
    const updatedExperiences = experienceFields.filter((field) => field.id !== id);
    setExperienceFields(updatedExperiences);
    setResumeData((prevData) => ({
      ...prevData,
      experiences: updatedExperiences.map((field) => field.value),
    }));
  };

  const addProjectField = () => {
    setProjectFields([...projectFields, { id: Date.now(), value: "" }]);
  };

  const removeProjectField = (id) => {
    const updatedProjects = projectFields.filter((field) => field.id !== id);
    setProjectFields(updatedProjects);
    setResumeData((prevData) => ({
      ...prevData,
      projects: updatedProjects.map((field) => field.value),
    }));
  };

  const addAchievementField = () => {
    setAchievementFields([...achievementFields, { id: Date.now(), value: "" }]);
  };

  const removeAchievementField = (id) => {
    const updatedAchievements = achievementFields.filter((field) => field.id !== id);
    setAchievementFields(updatedAchievements);
    setResumeData((prevData) => ({
      ...prevData,
      achievements: updatedAchievements.map((field) => field.value),
    }));
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
      <form className="space-y-4">
        {/* Basic Details */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />

        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            name="lkdn"
            placeholder="LinkedIn"
            onChange={handleInputChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            name="gthb"
            placeholder="GitHub"
            onChange={handleInputChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            name="prtf"
            placeholder="Portfolio"
            onChange={handleInputChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            name="cnt"
            placeholder="Contact"
            onChange={handleInputChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            name="mail"
            placeholder="Email"
            onChange={handleInputChange}
            className="flex-1 p-2 border rounded"
          />
        </div>

        {/* Introduction */}
        <textarea
          name="intro"
          placeholder="Define Yourself"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />

        {/* Skills */}
        <textarea
          name="skillsl1"
          placeholder="Skills (comma separated)"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="skillsl2"
          placeholder="Additional Skills (comma separated)"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="skillsl3"
          placeholder="Other Skills (comma separated)"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />

        {/* Education */}
        <textarea
          name="clgname"
          placeholder="College Name"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="education"
          placeholder="Degree and Branch"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <div className="flex gap-2">
          <input
            type="text"
            name="grdyear"
            placeholder="Start Year"
            onChange={handleInputChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            name="grdyear2"
            placeholder="End Year"
            onChange={handleInputChange}
            className="flex-1 p-2 border rounded"
          />
        </div>

        {/* Experience */}
        <div>
          <h4 className="font-bold">Experience</h4>
          {experienceFields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <textarea
                placeholder={`Experience ${index + 1}`}
                value={field.value}
                onChange={(e) => handleExperienceChange(field.id, e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => removeExperienceField(field.id)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addExperienceField}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Add Experience
          </button>
        </div>

        {/* Projects */}
        <div>
          <h4 className="font-bold">Projects</h4>
          {projectFields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <textarea
                placeholder={`Project ${index + 1}`}
                value={field.value}
                onChange={(e) => handleProjectChange(field.id, e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => removeProjectField(field.id)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addProjectField}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Add Project
          </button>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="font-bold">Achievements</h4>
          {achievementFields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <textarea
                placeholder={`Achievement ${index + 1}`}
                value={field.value}
                onChange={(e) => handleAchievementChange(field.id, e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => removeAchievementField(field.id)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addAchievementField}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Add Achievement
          </button>
        </div>
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
