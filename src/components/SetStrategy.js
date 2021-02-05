import React from 'react';
import { useForm,Controller } from 'react-hook-form';


const SetStrategy = ({ match }) => {

    const { register, handleSubmit } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="page">
            <div className="page-header">Strategy→ {match.params.strategyName}</div>
            <section className="big-section">
                <div className="section-header">
                    Set New Strategy
                </div>

                <form onSubmit={handleSubmit(onSubmit)} style={{margin:"20px auto"}}>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select><br/>
                    <input type="text" name="Coin" ref={register} placeholder="Coin ..." /> <br />
                    <input type="text" name="Coin2" ref={register} placeholder="Coin 2 ..." /><br />
                    <input type="text" name="Coin3" ref={register} placeholder="Coin 2 ..." />
                    <br />
                    <input type="submit" />
                </form>
            </section>
        </div>
    )
}

export default SetStrategy
