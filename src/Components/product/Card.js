import React from 'react';

import Button from './../core/Button';




const Card = ({ item, onClick, stylesheetClass}) => {


                

        const className = ["btn"];               
        const remoteClass = stylesheetClass;
        if (  remoteClass && remoteClass.length > 0 ){
                remoteClass.forEach(this_class => {
                        className.push(this_class);
                });
        }else{
                console.warn("BUTTON:\nattribute 'stylesheetClass' is empty...");
        }
        return (
            <Button   
            name={<img src={item.source} alt="..." className="img-thumbnail" />}
            stylesheetElement={{width: "33.3%"}}
            onClick={onClick}
          />
        );
};

export default Card;