import styles from '../styles/Preview.module.css'

function Preview({ formData }) {

    const { basicInfo, contactInfo, educationInfo, workInfo, technicalSkillsInfo } = formData;

    return(
        <div className={styles.previewContainer}>
            <div className={styles.cvTemplateContainer}>
                <div className={styles.previewHeader}>
                     <div> 
                        <div className={styles.fullName}>
                            <h2>{basicInfo.firstName}</h2>
                            <h2>{basicInfo.lastName}</h2>
                        </div>
                        <p>{basicInfo.title}</p>
                        <p>{basicInfo.summary}</p>
                    </div>
                    <div className={styles.previewContactInfo}>
                        <p>{contactInfo.email}</p>
                        <p>{contactInfo.phoneNumber}</p>
                        <p>{contactInfo.location}</p>
                        <p>{contactInfo.website}</p>
                    </div>
                </div>

                <div className={styles.previewMainContent}>
                    <div className={styles.previewLeftSide}>
                        <div>
                            <h3>WORK EXPERIENCE</h3>
                            <p>{workInfo.title}</p>
                            <p>{workInfo.workplace}</p>
                            Job responsibilities:
                            <ul>
                                {workInfo.responsibilities.map((info, index) => ( 
                                    <li key={index}>{info}</li>))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.previewRightSide}>
                        <div>
                            <h3>EDUCATION</h3>
                            <p>{educationInfo.institution}</p>
                            <p>{educationInfo.program}</p>
                            Additional info (ex. awards, courses, thesis project):
                            <ul>
                                {educationInfo.additionalInfo.map((info, index) => (
                                <li key={index}>{info}</li>))}
                            </ul>
                        </div>

                        <div>
                            <h3>TECHNICAL SKILLS</h3>
                            <ul>
                                {technicalSkillsInfo.technicalSkills.map((info, index) => (
                                    <li key={index}>{info}</li>
                                ))}
                            </ul>
                        </div>                       
                    </div>
                </div>

                
                
               
            </div>
        </div>
    )
}

export default Preview;