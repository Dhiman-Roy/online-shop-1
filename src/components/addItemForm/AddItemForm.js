import styles from './AddItemForm.module.css';
import Form from './Form';

const AddItemForm = () => {
    return (
        <div className={styles.formContainer}>
            <h2>Form</h2>
            <Form/>
        </div>
    )
}
export default AddItemForm;