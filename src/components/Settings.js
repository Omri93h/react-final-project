import React from 'react';
import { useForm, Controller } from 'react-hook-form';

async function insertData(data) {
    fetch('http://localhost:8080/profile', {
        method: 'PUT',
        body: data,
    })
        .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err)) // Do something with the error

    // console.log(await response.json())
}

const Settings = () => {
    const { control, handleSubmit } = useForm();
    //Handling Submit
    const onSubmit = data => {
        console.log(data);
        insertData(data)
    }

    const inputBinanceKey = (
        <form form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px auto" }}>
            <Controller as="input" control={control} type="text" name="binance_key" placeholder="Insert Api Key ..." /><br />
            <Controller as="input" control={control} type="text" name="binance_private" placeholder="Insert Api Secret ..." /><br />
            <br />
            <input type="submit" />
        </form>
    )
    return (
        <div className="page">
            <span className="page-header">S E T T I N G S</span>
            {inputBinanceKey}
        </div>
    )
}

export default Settings
