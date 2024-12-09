import styles from '../styles/Input.module.css'

import React, {useState} from 'react'

import Header from './Header'
import BasicInfo from './BasicInfo'
import ContactInfo from './ContactInfo'
import Education from './Education'
import Work from './Work'
import TechnicalSkills from './TechnicalSkills'

function Input({ formData, updateSection }) {

    return (
        <div className={styles.inputContainer}>
            <Header />
            <BasicInfo basicInfo={formData.basicInfo} 
                       setBasicInfo={(updatedInfo) => updateSection('basicInfo', updatedInfo)}/>
            <ContactInfo contactInfo={formData.contactInfo}
                         setContactInfo={(updatedInfo) => updateSection('contactInfo', updatedInfo)} />
            <Education educationInfo={formData.educationInfo}
                       setEducationInfo={(updatedInfo) => updateSection('educationInfo', updatedInfo)}/>
            <Work workInfo={formData.workInfo} 
                  setWorkInfo={(updatedInfo) => updateSection('workInfo', updatedInfo)}/>
            <TechnicalSkills technicalSkillsInfo={formData.technicalSkillsInfo}
                             setTechnicalSkillsInfo={(updatedInfo) => updateSection('technicalSkillsInfo', updatedInfo)}/>
        </div>
    )
}

export default Input
