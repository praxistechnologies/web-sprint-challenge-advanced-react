// write your custom hook here to control your checkout form
import { useState } from 'react'
const useForm = (initialState = {}, onSubmit) => {
    const [ formData, setFormData ] = useState(initialState)

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-unused-expressions
        onSubmit?.(formData);
        setFormData({
            ...formData,
            showSuccessMessage: true
        })
    }

    return { formData, handleInputChange, handleSubmit }
}

export default useForm;