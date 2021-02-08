import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import NumericInput from 'react-numeric-input';
import AddIcon from '@material-ui/icons/Add';

import { Button } from "@material-ui/core";


const pairs = [
    { value: 'ETHBTC', label: 'ETH/BTC' },
    { value: 'LTCBTC', label: 'LTC/BTC' },
    { value: 'BNBBTC', label: 'BNB/BTC' },
    { value: 'XRPBTC', label: 'XRP/BTC' },
    { value: 'DOGEBTC', label: 'DOGE/BTC' },
    { value: 'ADABTC', label: 'ADA/BTC' },
];


const SetStrategy = ({ match }) => {

    const { control, handleSubmit } = useForm();

    const [selected, handleSelected] = useState(null);

    function chooseSelected(opt) {
        handleSelected(opt);
        console.log(`selected : ${opt.value}`)
    }

    //Handling Submit
    const onSubmit = data => {
        console.log(data);
    }

    function percentFormat(num) {
        return num + '%'
    }

    function amountFormat(num) {
        if (!selected) {
            // alert("Please choose a trading pair !");
            console.log("alertt1");
            return (num + " ");
        }
        const currency = selected.label.slice(0, -4);
        return (num + " " + currency);
        console.log("alertt2");
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
                        <div style={{ width: '200px', margin: "0 auto" }}>
                            <Controller name="pair" control={control} render={({ onChange, ref }) => (
                                <Select placeholder="Enter currency ..." styles={customStyles} onChange={(e) => {
                                    onChange(e);
                                    chooseSelected(e);
                                }}
                                    options={pairs} ref={ref} />
                            )} /><br />
                        </div>
                        <Controller as={NumericInput} name="amount" control={control} min={1} max={9999999} step={1}
                            placeholder="Amount ..." format={amountFormat} /> <br /><br />

                        <Controller as={NumericInput} name="profit" control={control} min={0.1} max={500} step={0.1}
                            placeholder="Profit target  ..." format={percentFormat} /> <br /><br />

                        <Controller as={NumericInput} name="stoploss" control={control} min={0} max={20} step={0.1}
                            placeholder="Stoploss  ..." format={percentFormat} /> <br /><br />

                        <Button type="submit" variant="contained" size="large" style={{ background: "#1c316d", color: "white" }} startIcon={<AddIcon />}>Add Strategy</Button>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default SetStrategy
