import React from 'react';

class Toggle extends React.Component{

    render(){ 
        
        return(
            <div className="custom-control custom-switch d-flex justify-content-start">
                <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={this.props.onClickAction} value={this.props.value} />
                <label className="custom-control-label" htmlFor="customSwitch1">{this.props.name}</label>
            </div>
        );
    }

}

export default Toggle;