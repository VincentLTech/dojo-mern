import React from 'react'
import PersonCard from '../components/PersonCard';
import PersonCard2 from '../components/PersonCard2';
import PersonCard3 from '../components/PersonCard3';
import '../App.css';
const One = () => {
  return (
    <div>
        <PersonCard firstname={"Doe"} lastname={"Jane"} age={45} haircolor={"black"}/>
        <PersonCard firstname={"John"} lastname={"Smith"} age={88} haircolor={"Brown"}/>
        <PersonCard firstname={"Millard"} lastname={"Fillmore"} age={50} haircolor={"Brown"}/>
        <PersonCard firstname={"Maria"} lastname={"Smith"} age={62} haircolor={"Brown"}/>


        <PersonCard2 firstname={"Doe"} lastname={"Jane"} age={45} haircolor={"black"}/>
        <PersonCard2 firstname={"John"} lastname={"Smith"} age={88} haircolor={"Brown"}/> 

        <PersonCard3 firstname={"Doe"} lastname={"Jane"} year={45} month={3} day={12} haircolor={"black"}/>
    </div>
  )
}

export default One