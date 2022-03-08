import RegisterForm from "./RegisterForm.component";

const RegisterFormContainer = ({register}) => {
    const {registeredText, unregisteredText} = register.attributes;
    const img = register.attributes.backgroundImage.data.attributes.url;

    const styles = {
        backgroundImage: `url('${img}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    return <>
        <div className="registerForm__container" style={styles}>
            <RegisterForm registeredText={registeredText} unregisteredText={unregisteredText} />
        </div>
    </>
}

export default RegisterFormContainer;