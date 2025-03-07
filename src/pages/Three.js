import '../App.css';
import React, { useState } from 'react';
import Form from '../components3/Form';
import Display from '../components3/Display';
import NinjaForm from '../components3/NinjaForm';
import NinjaDisplay from '../components3/NinjaDisplay';

function Three() {
  // holding an array of strings for the colors input
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  // Ninja Bonus: Add a second input that takes in an integer. 
  //    This integer will allow the user to specify the height and width of the generated box.
  //    Using an object to hold both the integer and the color together
  const [ ninjaBoxArray, setNinjaBoxArray ] = useState([])

  return (
    <div className="App">
      <h1>Standard Assignment</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
      <h1>Ninja Assignment</h1>
      <NinjaForm ninjaBoxArray={ ninjaBoxArray } setNinjaBoxArray={ setNinjaBoxArray } />
      <NinjaDisplay ninjaBoxArray={ ninjaBoxArray } />
      
    </div>
  );
}
export default Three;