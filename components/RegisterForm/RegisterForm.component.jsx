import { useState, useEffect } from "react"

const RegisterForm = ({registeredText, unregisteredText}) => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
    });

    const [registeredUserFirstName, setRegisteredUserFirstName] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const firstName = formData.firstName;

        localStorage.setItem('userRegistered', true);
        localStorage.setItem('userRegisteredFirstName', firstName);

        setRegisteredUserFirstName(firstName);
        setFormSubmitted(true);
    }

    const checkUserRegistered = async () => {
        const userRegisteredFirstName = await localStorage.getItem('userRegisteredFirstName');
        const userRegistered = await localStorage.getItem('userRegistered');

        if (userRegisteredFirstName !== null && userRegistered) {
            setRegisteredUserFirstName(userRegisteredFirstName);
            setFormSubmitted(true);
    
        }

    }

    useEffect(() => {
        checkUserRegistered();
    }, [])

    const formMarkup = (
        <form id="registerForm" onSubmit={onFormSubmit}>
            <h2>{unregisteredText}</h2>

            <input type="email" name="email" value={formData.email} placeholder="Email" onInput={onInputChange} />
            <input type="text" name="firstName" value={formData.firstName} placeholder="First name" onInput={onInputChange} />
            <input type="text" name="lastName" value={formData.lastName} placeholder="Last name" onInput={onInputChange} />

            <button type="submit" id="submitFormBtn" value="Register">Register Now!</button>
        </form>
    );

    const formSubmittedMarkup = (
        <div id="registerForm">
            <h2>Thanks for registering, {registeredUserFirstName}!</h2>
            <p>{registeredText}</p>
        </div>
    )

    return <>
        {formSubmitted ? formSubmittedMarkup : formMarkup}
    </>
}

export default RegisterForm;