import React from 'react';

class List extends React.Component{

  render(){
    return(    
      <>
        <ul className="list-group mx-1 mt-2">
          {
            this.props.list.length > 0 ?     
              this.props.list.map((item,i) =>
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.product}
                  <span className="badge badge-primary badge-pill">{item.price}</span>
                </li>
              ) : 'Not items found'
          }
        </ul>
      </>
    );
  }
}

export default List;