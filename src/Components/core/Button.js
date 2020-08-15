import React from 'react';

// props => { stylesheetClass, click, selected, children }

const Button = ({ name='Demo', onClick, stylesheetClass, stylesheetElement}) => {
        const className = ["btn"];               
        const remoteClass = stylesheetClass;
        if (  remoteClass && remoteClass.length > 0 ){
                remoteClass.forEach(this_class => {
                        className.push(this_class);
                });
        }else{
                //console.warn("BUTTON:\nattribute 'stylesheetClass' is empty...");
        }
        //
        const styleObject = {width: "33.3%"};
        const remoteStyle = stylesheetElement;
        if (  remoteStyle ){
                Object.entries(remoteStyle).forEach(([key, value]) => {
                        styleObject[key] = value;
                });
        }else{
                //console.warn("BUTTON:\nattribute 'stylesheetClass' is empty...");
        }
        //
        if ( name === 'Demo'){
                //console.error("BUTTON:\nattribute 'name' is empty ...\nauto injection default 'CLICK ME' ");
        }
        // 
        return (
                <button 
                        type="button" 
                        className={className.join(" ")} 
                        onClick={onClick} 
                        style={styleObject}
                >
                        {name}
                </button>
        );
};

export default Button;