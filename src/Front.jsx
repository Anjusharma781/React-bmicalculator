import React, { useMemo, useState } from 'react'
import './index.css'

const Front = () => {
    const [height, SetHeight] = useState(180);
    const [weight, SetWeight] = useState(70);

     function onWeightChnage(e){
        SetWeight(e.target.value)
     }
     function onHeightChnage(e){
         SetHeight(e.target.value)
     }

      const output = useMemo(()=>{
         const calculateHeight = height /100;

        return(weight / (calculateHeight*calculateHeight)).toFixed(1)
      },[weight,height]);
    return (
        <main>
            <h1>    Project 1: BMI CALCULATOR</h1>
            <div className='input-section'>
                <p className='slider-output'> Weight : {weight}kg</p>
                <input className='input-slider' type='range' step="1"
                    min="40"
                    max="200" onChange={onWeightChnage} />
                <p className='silder-output'>Height: {height}cm</p>
                <input className='input-slider' type="range"onChange={onHeightChnage}
                min="140"
                    max="220" />
                <div className='output-section'>
                    <p>Your BMI is</p>
                    <p className='output'>{output}</p>
                </div>


            </div>
        </main>
    )
}

export default Front