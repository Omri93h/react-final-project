import React from 'react';
import { useForm } from 'react-hook-form';




const Authentication = (props) => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        console.log("here ios my age: ", data.age);
    }

    return (
        <div className="page">

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Log In</h2>
                <input name="username" ref={register} placeholder="Username ..." /> {/* register an input */}<br />
                <input type="password" name="password" ref={register({ required: true })} placeholder="Password ..." />
                {errors.password && 'Last name is required.'}<br />
                <br />
                {/* <input name="age" ref={register({ pattern: /\d+/ })} />
            {errors.age && 'Please enter number for age.'}
            <br /> */}
                <input type="submit" />
            </form>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Register</h2>
                <input name="username" ref={register} placeholder="Username ..." /> {/* register an input */}<br />
                <input type="password" name="password" ref={register({ required: true })} placeholder="Password ..." /><br />
                <input type="password" name="password2" ref={register({ required: true })} placeholder="Confirm Password ..." /><br />
                <input name="email" ref={register} placeholder="email ..." /> {/* register an input */}<br />
                {errors.password && 'Last name is required.'}
                <br />
                {/* <input name="age" ref={register({ pattern: /\d+/ })} />
            {errors.age && 'Please enter number for age.'}
            <br /> */}
                <input type="submit" />
            </form>
        </div>
    );

    // return (
    //     <div>
    //         Authenticaion comes here..
    //     </div>
    // )
}

export default Authentication
