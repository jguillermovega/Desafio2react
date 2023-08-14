import { useState } from 'react'
import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = ({ alert, setAlert}) => {
    return(
        <>
        <h1>Registra tu cuenta</h1>
        <SocialButton icon="fa-brands fa-facebook"></SocialButton>
        <SocialButton icon="fa-brands fa-github"></SocialButton>
        <SocialButton icon="fa-brands fa-linkedin-in"></SocialButton>
        <p>O usa tu mail para registrarte</p>
        <Formulario setAlert={setAlert}></Formulario>
        {alert.msg && <Alert msg={alert.msg} color={alert.color}></Alert>}
        </>
    )
}

export default Registro;