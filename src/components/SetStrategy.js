import React, { useState } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import NumericInput from 'react-numeric-input';
import AddIcon from '@material-ui/icons/Add';

import { Button } from "@material-ui/core";


const pairs = [
    { value: 'DOGEBTC', label: 'DOGE/BTC' },
    { value: 'ETHBTC', label: 'ETH/BTC' },
    { value: 'LTCBTC', label: 'LTC/BTC' },
    { value: 'BNBBTC', label: 'BNB/BTC' },
    { value: 'XRPBTC', label: 'XRP/BTC' },
    { value: 'ADABTC', label: 'ADA/BTC' }
];

async function addStrategy(data) {
    const response = await fetch('http://localhost:8080/api/strategy/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => console.log(response));
}


const SetStrategy = ({ match }) => {
    const { control, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        data.strategy_type = match.params.strategyName;
        data.currency = data.currency.value
        console.log(data);
        await addStrategy(data)
    }

    const [selected, handleSelected] = useState(null);
    function chooseSelected(opt) {
        console.log("SDADFA")
        handleSelected(opt);
        console.log(`selected : ${opt.value}`)
    }

    const strategy_name = match.params.strategyName;


    function percentFormat(num) {
        return num + '%'
    }

    function amountFormat(num) {
        if (!selected) {
            console.log("alertt");
            return (num + " ");
        }
        const currency = selected.label.slice(0, -4);
        return (num + " " + currency);
    }

    const customStyles = {
        valueContainer: () => ({
            width: "160px"
        })
    }

    return (
        <div className="page">
            <div className="page-header">Add Strategy → {match.params.strategyName.replaceAll("_", " ")}</div>
            <section className="big-section" style={{ width: "50%", margin: "0 auto" }}>
                <span className="section-header">Strategy Configuration</span>
                <div className="wrapper" style={{ textAlign: "center" }} >
                    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px auto" }}>
                        {/* <div style={{ width: '200px', margin: "0 auto" }}>
                            <Controller name="pair" control={control} render={() => (
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    placeholder="Enter currency ..."
                                    options={pairs}
                                    name="p"
                                    defaultValue={pairs[0]}
                                    isSearchable
                                    onChange={(e) => (
                                        onChange(e);
                                        chooseSelected(e)
                                )}
                                />
                            )} /><br />
                        // </div> */}

                        {/* <Controller as={Select} name="pair" control={control} options={pairs} /> <br /><br /> */}
                        <Controller
                            name="currency"
                            control={control}
                            options={pairs}
                            defaultValue={pairs[0]}
                            as={<Select />}
                        /><br /><br />

                        {/* <Controller as={(<select><option>ETHBTC</option></select>)} name="pair" /><br /><br /> */}


                        <Controller as={NumericInput} name="amount" control={control} min={1} max={9999999} step={1}
                            placeholder="Amount ..." format={amountFormat} /> <br /><br />

                        <Controller as={NumericInput} name="take_profit" control={control} min={3} max={10} step={1}
                            placeholder="Profit target  ..." format={percentFormat} /> <br /><br />

                        <Controller as={NumericInput} name="stop_loss" control={control} min={3} max={10} step={1}
                            placeholder="Stoploss  ..." format={percentFormat} /> <br /><br />

                        <Button type="submit" variant="contained" size="large" style={{ background: "#1c316d", color: "white" }} startIcon={<AddIcon />}>Add Strategy</Button>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default SetStrategy
