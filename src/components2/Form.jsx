import React, { useState } from 'react';

// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const Form = (props) => {
    const [ firstname, setFirstName ] = useState("");
    const [ lastname, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

    // using an object to hold style options for our results div
    const formDataDivStyle = {
        textAlign: "left", 
        width: "450px", 
        margin: "auto",
    }

    const inputDataDivStyle = {
        textAlign: 'center',
        width: "450px",
        borderRadius: "10px",
        backgroundColor: "lightgray",
        padding: "0px 10px",
        margin: "5px",
    }

    return (
        <div>
            <form style={{ marginTop: "20px", textAlign: 'center' }}>
                <div style={inputDataDivStyle}>
                    <label>First Name</label>
                    <input type="text" name="firstname"onChange={ (e) => setFirstName(e.target.value) }/>
                </div>
                <div style={inputDataDivStyle}>
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                <div style={inputDataDivStyle}>
                    <label>Email</label>
                    <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div style={inputDataDivStyle}>
                    <label>Password</label>
                    <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                <div style={inputDataDivStyle}>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
            </form>

            <div style={ formDataDivStyle }>
                <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                <p><label>First Name: </label>{ firstname }</p>
                <p><label>Last Name: </label>{ lastname }</p>
                <p><label>Email: </label>{ email }</p>
                <p><label>Password: </label>{ password }</p>
                <p><label>Confirm Password: </label>{ confirmPassword }</p>
            </div>
        </div>
    )
}

export default Form;