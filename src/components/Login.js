import React from 'react';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

async function insertData(data) {
    var new_data = { binance_key: data.binance_key, binance_private: data.binance_private };
    fetch('http://localhost:8080/profile/', {
        method: 'PUT',
        body: JSON.stringify(new_data),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        withCredentials: 'true'
    })
        .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err)) // Do something with the error
}

export const loginButton = (
    <Button size="large" variant="contained" style={{ opacity: "0.8" }} type="submit">
        <b>Login</b>
    </Button>
)

const Login = (props) => {
    let history = useHistory();
    console.log(props);
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        console.log("HISTORY:", history)
        async function insert(data) {
            await insertData(data);
        }
        insert(data);
        props.setHasBinanceAPI(true);
        window.location.replace("/dashboard");
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
            <Controller as={Input} type="text" name="binance_key" control={control} placeholder="Binance API Key ..." defaultValue="" /><br /><br />
            <Controller as={Input} type="password" name="binance_private" control={control} placeholder="Binance API Private ..." defaultValue="" /><br /><br />
            {loginButton}
        </form>
    )
}

export default Login;