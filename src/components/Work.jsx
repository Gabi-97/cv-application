import styles from '../styles/Input.module.css'

function Work({ workInfo, setWorkInfo }) {

    function handleInputChange(event) {
        const { id, value } = event.target;
        setWorkInfo({
            [id]: value,
        });
    }

    function handleAddChange() {
        if(workInfo.newWorkResposibility.trim() !== "" ) {
            setWorkInfo({
                ...workInfo,
                responsibilities: [...workInfo.responsibilities, workInfo.newWorkResposibility],
                newWorkResposibility: "",
            }); 
        }
    }

    function removeItem(index) {
        setWorkInfo({
            ...workInfo,
            responsibilities: workInfo.responsibilities.filter((_, i) => i !== index),
        });
    }
    

    return(
        <div className={styles.workContainer}>  
            <h2>Work Experience</h2>
            <label id="title">
             Title/Position:
                <input type="text"
                       id="title"
                       placeholder='Business Analyst'
                       onChange={handleInputChange} />
            </label>
            <label id="workplace">
            Workplace/Company/Organization:
                <input type="text"
                       id="workplace"
                       placeholder='Company Inc.'
                       onChange={handleInputChange} />
            </label>
            <label id="title">
                List your job responsibilities: 
                <div>
                    <input type="text"
                        id="responsibilities"
                        value={workInfo.newWorkResposibility}
                        onChange={(e) => setWorkInfo({ ...workInfo, newWorkResposibility: e.target.value })}
                    />
                    <button className={styles.addRespBtn} onClick={handleAddChange}>+</button>
                </div>
                <ul>
                    {workInfo.responsibilities.map((info, index) => (
                        <li key={index}>{info} <button className={styles.removeBtn} onClick={() => removeItem(index)}>X</button></li>
                    ))}
                </ul>
            </label>
        </div>
    )
}

export default Work