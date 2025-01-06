import styles from '../styles/Input.module.css';

function Education( {educationInfo, setEducationInfo} ) {


    function handleInputChange(event) {
        const { id, value } = event.target;
        
        setEducationInfo({
            [id]: value,
        });
    }

    function handleAddChange() {
        if(educationInfo.newAdditionalInfo.trim() !== "" ) {
            setEducationInfo({
                ...educationInfo,
                additionalInfo: [...educationInfo.additionalInfo, educationInfo.newAdditionalInfo],
                newAdditionalInfo: "",
            });
        }
    }

    function removeItem(index) {
        setEducationInfo({ 
            ...educationInfo,
            additionalInfo: educationInfo.additionalInfo.filter((_, i) => i !== index),
        });
    }


    return(
        <div className={styles.educationInfoContainer}>
            <h2>Education</h2>
            <label id="institution">
                University/Institution/Organization:
                <input type="text"
                       id="institution"
                       placeholder="University of London"
                       onChange={handleInputChange} />
            </label>
            <label id="program">
                Program/Degree/Course:
                <input type="text"
                       id="program"
                       placeholder="Philosophy"
                       onChange={handleInputChange} />
            </label>
            <label id="additionalInfo">
                Additional info (ex. awards, courses, thesis project): 
                <div>
                    <input type="text"
                        id="additionalInfo"
                        value={educationInfo.newAdditionalInfo}
                        onChange={(e) => setEducationInfo({ ...educationInfo, newAdditionalInfo: e.target.value })}
                    />
                    <button className={styles.addEducationBtn} onClick={handleAddChange}>+</button>
                </div>
                <ul>
                    {educationInfo.additionalInfo.map((info, index) => (
                        <li key={index}>{info} <button className={styles.removeBtn} onClick={() => removeItem(index)}>X</button></li>
                    ))}
                </ul>
                
            </label>
        </div>
    )
}

export default Education