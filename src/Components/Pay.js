import React from 'react';

import Card from './product/Card';

class Pay extends React.Component{
  constructor(props){
    super(props)
    this.Update = this.Update.bind(this);
  }

  Update(val){
  this.props.onUpdate(val)
  }
  render(){
    return(    
      <>  
      <ul className="px-0 mt-2">
      { this.props.list.length > 0 ?     
              this.props.list.map((item,i) =>
                (
                  item.qt > 0 ? 
                  <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{item.product} x {item.qt}</span> <button onClick={() => this.Delete(item.product)} style={{padding:".375rem"}} className="btn btn-outline-dark">x</button>
                  </li> : null
                )
              ) : 'Not items found'
          }  
      </ul>
      <ul className="px-0 mt-2">
          <li className="list-group-item d-flex justify-content-end border-0">
            SubTotal<span> : {this.props.priceTab.subTotalPay.toFixed(2)} €</span>
          </li>
          <li className="list-group-item d-flex justify-content-end border-0">
            VAT<span> : {this.props.priceTab.vatPay.toFixed(2)} €</span>
          </li>
          <li className="list-group-item d-flex justify-content-end border-0">
            Eco tax<span> : {this.props.priceTab.ecoTaxPay.toFixed(2)} €</span>
          </li>
          <li className="list-group-item d-flex justify-content-end border-0 font-weight-bold">
            Total<span> : {this.props.priceTab.TotalPay.toFixed(2)} €</span>
          </li>
      </ul>
          <div className="d-flex justify-content-start">
          {
            this.props.list.length > 0 ?     
              this.props.list.map((item,i) =>
                < Card item={item} key={i} onClick={() => this.Update(item.product)} />
              ) : null
          }            
          </div>

          
      </>
    );
  }
}

export default Pay;