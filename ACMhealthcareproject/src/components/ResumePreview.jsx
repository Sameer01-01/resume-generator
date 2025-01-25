import React from "react";

const ResumePreview = ({ resumeData }) => {
  const {
    name,
    lkdn,
    gthb,
    prtf,
    cnt,
    mail,
    intro,
    skillsl1,
    skillsl2,
    skillsl3,
    clgname,
    education,
    grdyear,
    grdyear2,
    experiences,
    projects,
    achievements,
  } = resumeData;

  return (
    <div className="bg-gray-100 p-10 rounded shadow">
      {/* Personal Details */}
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <div className="flex flex-wrap gap-4 text-blue-600">
        <a href={lkdn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={gthb} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={prtf} target="_blank" rel="noopener noreferrer">Portfolio</a>
        <p>Contact: {cnt}</p>
        <p>Email: {mail}</p>
      </div>

      {/* Introduction */}
      <section className="my-6">
        <h2 className="text-xl font-bold mb-2">About Me</h2>
        <p>{intro}</p>
      </section>

      {/* Skills */}
      <section className="my-6">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <p>{skillsl1}</p>
        <p>{skillsl2}</p>
        <p>{skillsl3}</p>
      </section>

      {/* Education */}
      <section className="my-6">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <p><strong>{clgname}</strong></p>
        <p>{education}</p>
        <p>{grdyear} - {grdyear2}</p>
      </section>

      {/* Experience */}
      <section className="my-6">
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        {experiences && experiences.length > 0 ? (
          <ul className="list-disc pl-5">
            {experiences.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        ) : (
          <p>No experiences added yet.</p>
        )}
      </section>

      {/* Projects */}
      <section className="my-6">
        <h2 className="text-xl font-bold mb-2">Projects</h2>
        {projects && projects.length > 0 ? (
          <ul className="list-disc pl-5">
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        ) : (
          <p>No projects added yet.</p>
        )}
      </section>

      {/* Achievements */}
      <section className="my-6">
        <h2 className="text-xl font-bold mb-2">Achievements</h2>
        {achievements && achievements.length > 0 ? (
          <ul className="list-disc pl-5">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        ) : (
          <p>No achievements added yet.</p>
        )}
      </section>
    </div>
  );
};

export default ResumePreview;
