import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeForm setResumeData={setResumeData} />} />
        <Route path="/resume-preview" element={<ResumePreview resumeData={resumeData} />} />
      </Routes>
    </Router>
    


  );
}

export default App;
