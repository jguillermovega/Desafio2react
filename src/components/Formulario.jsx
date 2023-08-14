import { useState } from "react";

const Formulario = ({setAlert}) => {
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const validarDatos = (e) => {
    e.preventDefault();
    if(password != confirmPassword 
    ) {
        setAlert({
            msg: "Las contraseñas no coinciden",
            color: "danger",
        });
        return;
    }
    if (nombre === "" || 
    email === "" ||
    password === "" ||
    confirmPassword === ""){
        setAlert({
            msg: "Favor completar todos los campos",
            color: "danger",
        });
        return;
    }
    setAlert({
        msg: "Registro completado de forma exitosa",
        color: "success",
    });
    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
}

    return (
        <>
        <form onSubmit={validarDatos}>
            <div>
            <input 
            type="text" 
            name="nombre" 
            placeholder="Escribe tu nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            ></input></div>

            <div>
            <input 
            type="email" 
            name="email" 
            placeholder="Ejemplo@ejemplo.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></input></div>

            <div>
            <input 
            type="password" 
            name="password" 
            placeholder="Escribe tu contraseña" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input></div>

            <div>
            <input 
            type="password" 
            name="password" 
            placeholder="Confirma tu contraseña" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            ></input></div>
            
            <div>
            <button type="submit">Registrarse</button>
            </div>

        </form>
        </>
    )
}

export default Formulario;