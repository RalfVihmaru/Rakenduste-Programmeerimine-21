import './AddCategoryForm.css';
import { useRef } from 'react';

function AddCategoryForm(props) {
    const categoryInputRef = useRef();
    const categoryDescInputRef = useRef();
    function formSubmitHandler(e) {
        e.preventDefault();
        const categoryValue = categoryInputRef.current.value;
        const categoryDescValue = categoryDescInputRef.current.value;

        const category = {
            name: categoryValue,
            category: categoryDescValue
        }
        props.onAddCategory(category);
    }

    return (
        <form onSubmit={formSubmitHandler}>
        <label>Kategooria nimi</label><br />
        <input type="text" placeholder="Kategooria nimi" required ref={categoryInputRef} /><br />

        <label>Kategooria täpsustus</label><br />
        <input type="text" ref={categoryDescInputRef} /><br />

        <button>Lisan kategooria</button>
        </form>
    );
}

export default AddCategoryForm;