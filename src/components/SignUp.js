import React from 'react';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@material-ui/core';


export const signUpButton = (
    <Button size="large" variant="contained" style={{ background: "#1c316d", color: "white", opacity: "0.8" }} type="submit" >
        <b>Sign Up</b>
    </Button>
)

const SignUp = () => {

    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    const formStyle = {
        fontFamily: 'ubuntu',
        padding: "20px",
        color: "#1c316d",
        textAlign: "center"

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Sign Up</h2>
            <Controller as={Input} type="text" name="username" control={control} placeholder="Username or Email ..." defaultValue="" /><br /><br />
            <Controller as={Input} type="password" name="password" control={control} placeholder="Password ..." defaultValue="" /><br /><br />
            {signUpButton}
        </form>
    )
}

export default SignUp;