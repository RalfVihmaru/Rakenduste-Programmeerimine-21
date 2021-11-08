import './AddItemForm.css';
import { useRef } from 'react';

function AddItemForm(props) {
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();
    function formSubmitHandler(e) {
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;
        const item = {
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }
        props.onAddItem(item);
    }

    return (
        <form onSubmit={formSubmitHandler}>
        <label >Eseme nimi</label><br />
        <input class="input-label" type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
        <label >Eseme hind</label><br />
        <input class="input-label" type="number" required ref={priceInputRef} /><br />
        <label >Eseme kategooria</label><br />
        <input class="input-label" type="text" required ref={categoryInputRef} /><br />
        
        <button class="submit-button">Sisesta uus ese</button>
        </form>
    );
}

export default AddItemForm;