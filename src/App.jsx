import React, { useState } from 'react'

import Input from "./components/Input"
import Preview from "./components/Preview"

import './index.css'

function App() {
    //shared state for all components
    const [formData, setFormData] = useState({
      basicInfo: {
        firstName: "John",
        lastName: "Doe",
        title: "Business Manager",
        summary: "A short summary about yourself",
      },
      contactInfo: {
        email: "sample@email.com",
        phoneNumber: "+111 222 333",
        location: "London, UK",
        website: "linkedin.sample.com/johndoe",
      },
      educationInfo: {
        institution: "University of London",
        program: "Philosophy",
        additionalInfo: [],
        newAdditionalInfo: "",
      },
      workInfo: {
        title: "Business Analyst",
        workplace: "Company Inc.",
        responsibilities: [],
        newWorkResponsibility: "",
      },
      technicalSkillsInfo: {
        technicalSkills: [],
        newTechnicalSkill: "",
      }

    })

    const updateSection = (section, updatedData) => {
      setFormData((prev) => ({
        ...prev,
        [section]: {
            ...prev[section],
            ...updatedData,
        }
      }));
    };

  return (
    <div className="container">
      <Input formData={formData} updateSection={updateSection} />
      <Preview formData={formData}/>
    </div>
  )
}

export default App
