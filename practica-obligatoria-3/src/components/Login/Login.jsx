import { Button, Form, } from "react-bootstrap"
import { useState } from "react";
import "./Login.css"

const Login = () => {

    const [userNameRegister, setUserNameRegister] = useState("")
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const userNameRegisterHandler = (event) => {

        const userName = event.target.value;
        setUserNameRegister(userName);

        if (userName.toLowerCase().includes('o')) {
            setErrorMessage("Por favor, ¡Nombres de usuario sin la letra 'o'!");
            alert("Por favor, ¡Nombres de usuario sin la letra 'o'!")
        } else {
            setErrorMessage("");
        }
    };


    const changePasswordHandler = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userNameRegister === "" || password === "") {
            alert("Usuario inválido para registrarse");
        } else if (errorMessage !== "") {
            alert(errorMessage);
        } else {
            alert("¡Usuario registrado correctamente!");
            setErrorMessage("Usuario registrado")
        }

    };



    return (
        <section className="login">
            <h1>Log in</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="userName">
                    <Form.Control
                        type="text"
                        required
                        value={userNameRegister}
                        placeholder="Username..."
                        onChange={userNameRegisterHandler}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={changePasswordHandler}
                        value={password}
                    />
                </Form.Group>

                <Form.Group controlId="button-log">
                    <Button onClick={handleSubmit}>
                        Registrarse
                    </Button>
                </Form.Group>
                <Form.Group controlId="p-with-user">
                    <p>User: {userNameRegister}<br></br>
                    Estado: {errorMessage}
                    </p>


                </Form.Group>

            </Form>

        </section>


    );
}

export default Login;

