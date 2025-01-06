import styles from '../styles/Input.module.css'

function BasicInfo({ setBasicInfo }) {

    function handleInputChange(event) {
        const { id, value } = event.target;
        
        setBasicInfo({
            [id]: value,
        });
    }

    return(
        <div className={styles.basicInfoContainer}>
            <h2>Basic Info</h2>
                <label htmlFor="firstName">
                    First name:
                    <input id="firstName" 
                        type="text" 
                        placeholder="John"
                        onChange={handleInputChange}/>
                </label>
                <label htmlFor="lastName">
                    Last name:
                    <input id="lastName" 
                        type="text" 
                        placeholder="Doe"
                        onChange={handleInputChange}/>
                </label>
                <label htmlFor="title">
                    Professional title:
                    <input id="title" 
                        type="text" 
                        placeholder="Business Manager"
                        onChange={handleInputChange}/>
                </label>
                <label htmlFor="summary">
                    Give a summary about yourself:
                    <input id="summary" 
                        type="text" 
                        placeholder="A short summary about yourself"
                        onChange={handleInputChange}/>
                </label>
        </div>
    )
}

export default BasicInfo