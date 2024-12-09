import styles from '../styles/Input.module.css'

function TechnicalSkills({ technicalSkillsInfo, setTechnicalSkillsInfo }) {

    function handleAddChange() {
      if(technicalSkillsInfo.newTechnicalSkill.trim() !== "") {
        setTechnicalSkillsInfo({
            ...technicalSkillsInfo,
            technicalSkills: [...technicalSkillsInfo.technicalSkills, technicalSkillsInfo.newTechnicalSkill],
            newTechnicalSkill: "",
        }); 
      }
    }

    function removeItem(index) {
        setTechnicalSkillsInfo({
            ...technicalSkillsInfo,
            technicalSkills: technicalSkillsInfo.technicalSkills.filter((_, i) => i !== index),
        });
    }

    return(
        <div className={styles.technicalSkillsContainer}>
            <h2>Technical Skills</h2>
            <label htmlFor="technicalSkills">
                Showcase the most relevant skills applicable to the job you're applying for
                <div>
                    <input type="text"
                        id="technicalSkills"
                        placeholder="Design"
                        value={technicalSkillsInfo.newTechnicalSkill}
                        onChange={(e) => setTechnicalSkillsInfo({ ...technicalSkillsInfo, newTechnicalSkill: e.target.value })}/>
                    <button className={styles.addSkillBtn} onClick={handleAddChange}>+</button>
                    
               </div>
               <ul>
                    {technicalSkillsInfo.technicalSkills.map((skill, index) => (
                        <li key={index}>{skill} <button className={styles.removeBtn} onClick={() => removeItem(index)}>X</button></li>
                    ))}
               </ul>
            </label> 
        </div>
    )
}

export default TechnicalSkills