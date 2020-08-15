import React from 'react';

import Card from './product/Card';

class Pay extends React.Component{
  constructor(props){
    super(props)

    this.state ={    
      subTotalPay : 0,
      vatPay : 0,
      ecoTaxPay : 0,
      TotalPay : 0,
    }

    this.Update = this.Update.bind(this)
    this.Delete = this.Delete.bind(this)
    this.handlerFact = this.handlerFact.bind(this)
  }

  componentDidMount(){
    this.handlerFact()
  }

  handlerFact(){
    var price = {
      subTotalPay : 0,
      vatPay : 0,
      ecoTaxPay : 0,
      TotalPay : 0,
    };

    this.props.list.map((item)=>{
      if( item.qt > 0 ){
        price.TotalPay += item.price * item.qt;
        price.vatPay += ( price.TotalPay * 20 )/100 ;
        price.subTotalPay += price.TotalPay;
        price.ecoTaxPay += 0.03 * item.qt;  
      }     
      //console.log("price",price,item)
        return item;
    })
   

      this.setState({
        subTotalPay : price.subTotalPay,
        vatPay : price.vatPay,
        ecoTaxPay : price.ecoTaxPay,
        TotalPay : price.TotalPay ,
      })
  }

  Update(val){
    this.props.onUpdate(val)
    this.handlerFact()
  }

  Delete(val){
    this.props.onDelete(val)
    this.handlerFact()
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
            SubTotal<span> : {this.state.subTotalPay.toFixed(2)} €</span>
          </li>
          <li className="list-group-item d-flex justify-content-end border-0">
            VAT<span> : {this.state.vatPay.toFixed(2)} €</span>
          </li>
          <li className="list-group-item d-flex justify-content-end border-0">
            Eco tax<span> : {this.state.ecoTaxPay.toFixed(2)} €</span>
          </li>
          <li className="list-group-item d-flex justify-content-end border-0 font-weight-bold">
            Total<span> : {this.state.TotalPay.toFixed(2)} €</span>
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