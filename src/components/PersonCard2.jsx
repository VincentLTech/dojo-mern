import React, { useState } from 'react';
const PersonCard2 = (props) => {
    const { firstname, lastname, age, haircolor } = props;
    const [stateAge, Older] = useState(age);
    return (
        <div>
            <h2>{lastname}, {firstname}</h2>
            <p>Age: {stateAge}</p>{/* Line 4 */}
            <p>Hair Color: {haircolor}</p>
            <button onClick={() => Older(stateAge + 1)}> Birthday Button for {firstname} {lastname}</button>
        </div>
    );

}
export default PersonCard2;