import React, { useState } from 'react';

// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const Form2 = (props) => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    return(
        <div>
            <form>
                <div>
                    <p>First Name:</p>
                    <input type="text" name="firstname" onChange={ (e) => setFirstName(e.target.value) }/>
                    {firstname.length < 2 && firstname.length > 0 ? (
                        <p>First Name must be at least 2 characters</p>
                    ) : null}
                </div>
                <div>
                    <p>Last Name:</p>
                    <input type="text" name="lastname" onChange={ (e) => setLastName(e.target.value) }/>
                    {lastname.length < 2 && lastname.length > 0 ? (
                        <p>Last Name must be at least 2 characters</p>
                    ) : null}
                </div>
                <div>
                    <p>Email:</p>
                    <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) }/>
                    {email.length < 5 ? (
                        <p>Email must be at least 5 characters</p> 
                    ): null}
                </div>
                <div>
                    <p>Password:</p>
                    <input type="text" name="password" onChange={ (e) => setPassword(e.target.value) }/>
                    {email.length < 8 ? (
                        <p>Password must be at least 8 characters</p> 
                    ): null}
                </div>
                <div>
                    <p>Confirm Password:</p>
                    <input type="text" name="confirmpassword" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                    {password != confirmpassword ? (
                        <p>password must match</p> 
                    ): null}
                </div>
            </form>
            <div>
                {firstname}, {lastname}, {email}, {password}, {confirmpassword}
            </div>
        </div>
    )
}

export default Form2;