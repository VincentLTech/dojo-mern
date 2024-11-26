import React from 'react';

const PersonCard = (props) => {
    const {firstname,lastname, age, haircolor} =props;
    return(
        <div>
            <h1>{lastname},{firstname}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {haircolor}</p>
            {/* <button onClick={ ()=> alert("Target Practice")}>Birthday Button for {firstname}{lastname}</button> */}
        </div>

    );
    /*
    return(
        <div>
            <h1>
                {props.firstname}
            </h1>
        </div>
    );
    */
}
export default PersonCard;