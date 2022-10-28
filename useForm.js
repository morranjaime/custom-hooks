
import { useState } from "react";
export const useForm = (initialObject = {}) => {

    const [formState, setFormState] = useState(initialObject);

    const onInputOnChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


    const onResetForm = () => {
        setFormState(initialObject);
    }

    return {
        ...formState,
        formState,
        onInputOnChange,
        onResetForm
    }
}
