import React from 'react';

class Icon extends React.Component{

    render(){
        
        const className = ["material-icons"];               
        const remoteClass = this.props.stylesheetClass;
        if ( remoteClass && remoteClass.length > 0 ){
                className.push(...remoteClass)
        }else{
                console.warn("ICON:\nattribute 'stylesheetClass' is empty...");
        }
//
        const icon_name = this.props.name;
        if ( !icon_name || icon_name === ''){
                console.error("ICON:\nattribute 'name' is empty ...\nauto injection default 'CLICK ME' ");
        }
//                   
        return(
            <span className={className.join(" ")} style={{color : this.props.gradient}}>
                {icon_name}
            </span>
        );
    }

}

export default Icon;