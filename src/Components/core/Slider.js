import React, { Component } from 'react';

import RCSlider from 'rc-slider';

import 'rc-slider/assets/index.css';

class Slider extends Component{
    
    render(){
        return(
            <RCSlider style={{ margin: "0 10px" }}
                max={this.props.max} 
                min={this.props.min} 
                onChange={this.props.onChange} 
                value={this.props.value}
            />
        );
    }

}

export default Slider;
