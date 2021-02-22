import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';


const Settings = () => {
    const { control, handleSubmit } = useForm();
    //Handling Submit
    const onSubmit = data => {
        console.log(data);
    }

    const inputBinanceKey = (
        <form form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px auto" }}>
            <Controller as="input" defaultValue="" control={control} type="text" name="binance_key" placeholder="Insert Api Key ..." /><br />
            <Controller as="input" defaultValue="" control={control} type="text" name="binance_private" placeholder="Insert Api Secret ..." /><br />
            <br />
            <input type="submit" />
        </form>
    )
    return (
        <div className="page">
            <span className="page-header">S E T T I N G S</span>
            <section className="big-section">
                <span className="section-header">Configure API</span>
                {inputBinanceKey}
            </section>
        </div>
    )
}

export default Settings
