import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';

async function insertPremium(data) {
    fetch('http://localhost:8080/profile/setPremium', {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err)) // Do something with the error
}

const Settings = () => {
    const { control, handleSubmit } = useForm();
    //Handling Submit
    const onSubmit = data => {
        console.log(data);
        // insertData(data)
    }


    function handlePremium() {
        console.log("become premium");

        insertPremium({ "is_premium": true })
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
            <section className="big-section">
                <span className="section-header">Premium Membership</span>
                <div className="wrapper" style={{ textAlign: "center" }} >
                    <Button aria-label="premium" variant="contained" onClick={() => handlePremium()} startIcon={<StarIcon />} style={{ marginTop: "20px", backgroundColor: "gold" }}>
                        Become a Premium Member
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default Settings
