import React from 'react';

import Button from './core/Button';

import Slider from './core/Slider';

// props => { name, onClick, onChange , stylesheetClass }

const Add = ({ name='Demo', onClick, inputForm, inputSlider, slider }) => {
  
  return(    
    <>
        <div className="input-group my-3">
          <input onChange={inputForm} type="text" className="form-control" />
          <div className="input-group-append">
            <Button onClick={onClick} name={name} stylesheetClass={["btn-primary"]} stylesheetElement={{width: "auto"}} />
          </div>   
        </div>
        <p className="d-flex justify-content-between mb-3">
            <span className="ml-1">€</span> <span className="mr-1">{slider}</span>
          </p>
          <Slider
              min={1} 
              max={10} 
              onChange={inputSlider} 
              value={slider} 
          />

    </>
  );
};
export default Add;