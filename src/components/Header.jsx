import styles from '../styles/Input.module.css'

function Header() {

    return(
        <div className={styles.header}>
            <h1 className={styles.mainHeader}>cv generator</h1>
            <p className={styles.introPara}>Create your CV by filling out the forms below.</p>
            <span>Check out the Github repo for this project here.</span>
        </div>
    )
}

export default Header