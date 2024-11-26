import React, {useState} from 'react';
const PersonCard3 = (props) => {
    const { firstname, lastname, year,month,day, haircolor } = props;
    const [stateYear, OlderYear] = useState(year);
    const [stateMonth, OlderMonth] = useState(month);
    const [stateDay, OlderDay] = useState(day);
    return (
        <div>
            <h2>{lastname}, {firstname}</h2>
            <p>Age: {stateYear} {stateMonth} {stateDay}</p>{/* Line 4 */}
            <p>Hair Color: {haircolor}</p>
            <button onClick={() => OlderYear(stateYear + 1)}> Birthday Button for {firstname} {lastname}</button>
            <button onClick={() => OlderMonth(stateMonth + 1)}> Birthday Button for {firstname} {lastname}</button>
            <button onClick={() => OlderDay(stateDay + 1)}> Birthday Button for {firstname} {lastname}</button>
        </div>
    );

}
export default PersonCard3;