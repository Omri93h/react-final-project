import React from 'react';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@material-ui/core';


export const loginButton = (
    <Button size="large" variant="contained" style={{ opacity: "0.8" }} type="submit">
        <b>Login</b>
    </Button>
)

const Login = (props) => {

    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        props.auth.setAuth(true);
        props.user.setUserName(data.username)
    }

    const formStyle = {
        fontFamily: 'ubuntu',
        padding: "20px",
        color: "#1c316d",
        textAlign: "center"

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }} >Login</h2>
            <Controller as={Input} type="text" name="username" control={control} placeholder="Username or Email ..." defaultValue="" /><br /><br />
            <Controller as={Input} type="password" name="password" control={control} placeholder="Password ..." defaultValue="" /><br /><br />
            {loginButton}
        </form>
    )
}

export default Login;