import styles from '../styles/Input.module.css';

function ContactInfo( { setContactInfo }) {

    function handleInputChange(event) {
        const { id, value } = event.target; 

        setContactInfo({
            [id]: value
        });
    }

    return (
        <div className={styles.contactInfoContainer}>   
            <h2>Contact Info</h2>
            <label htmlFor="email">
                Email:
                <input 
                    type="email" 
                    id="email" 
                    placeholder="sample@email.com"
                    onChange={handleInputChange}/>
            </label>
            <label htmlFor="phoneNumber">
                Phone number:
                <input 
                    type="tel" 
                    id="phoneNumber" 
                    placeholder="+111 222 333"
                    onChange={handleInputChange}/>
            </label>
            <label htmlFor="location">
                Location:
                <input 
                    type="text" 
                    id="location" 
                    placeholder="Lundon, UK"
                    onChange={handleInputChange}/>
            </label>
            <label htmlFor="website">
                Website:
                <input 
                    type="text" 
                    id="website" 
                    placeholder="linkedin.sample.com/johndoe"
                    onChange={handleInputChange}/>
            </label>

        </div>
    )
}

export default ContactInfo