import React from 'react';
import { useForm } from 'react-hook-form';




const Authentication = (props) => {
    const { controller, handleSubmit } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        console.log("here ios my age: ", data.age);
    }

    return (
        <div className="page">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Log In</h2>
                <input name="username" ref={controller} placeholder="Username ..." /> {/* controller an input */}<br />
                <input type="password" name="password" ref={controller({ required: true })} placeholder="Password ..." />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Authentication
