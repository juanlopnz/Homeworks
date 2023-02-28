import { useState } from "react";

const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState("");

    const onInputChange = (evt) => {
        setinputValue(evt.target.value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddCategory(inputValue);
        setinputValue("")
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input className="border-white-900 border-2"
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}

export default AddCategory;