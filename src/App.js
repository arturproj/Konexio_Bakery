import React from 'react';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import specimen from './specimen.jpg';

import Button from './Components/core/Button';

import Add from './Components/Add';
import List from './Components/List';
import Pay from './Components/Pay';

class App extends React.Component {
  constructor(state) {
    super(state);

    this.state = {
      inputForm : '',
      inputSlider : 1,
      activeTab : 'add',

      items : [],

      source_img : specimen,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(this_comp) {
    this.setState({
      activeTab: this_comp
    });
  }
  handleForm(this_form) {
    this.setState({
      inputForm: this_form
    });
  }
  handleSlider(this_form) {
    this.setState({
      inputSlider: this_form
    });
  }
  handleSubmit() {
    if ( this.state.inputForm !== '' && this.state.inputForm !== ' ' ){
      const items = this.state.items;
      fetch(`http://konexio.codiscovery.co/bakery/api/?q=${this.state.inputForm}`)
      .then(response => response.json())
      .then(image => {
          items.map((item,i)=> {
             if( item.product === this.state.inputForm ) {
              items.splice(i, 1)
             }
          });
          items.push({ 
            product:this.state.inputForm, 
            price:this.state.inputSlider, 
            qt:0, 
            source : ( image.success === true ? image.source : this.state.source_img )
          })
          this.setState({
            items,
            inputForm : "",
            inputSlider: 1,
            activeTab : "list"
          })
        })
    }
  }
  handleUpdate(val){    
    let items = this.state.items;

    items.map((item)=>{
      if( item.product === val){       
        item.qt += 1; 
        return item;
      }
      return item;
    })
   
    this.setState({
      items,
    })
  }
  handleDelete(val){    
    let items = this.state.items;
    items.map((item,i)=>{
      if( item.product === val && item.qt > 0){     
        item.qt--;
      }
      return item;
    })
    this.setState({
      items,
    })
  }

  render() {
    return (
      <div className="text-center px-1" style={{display:"grid",width:"100%"}}>
        <h1>Bakery</h1>
        <div className="d-flex justify-content-between">
          <Button  
            onClick={() => this.handleClick('add')} 
            name='add'
            stylesheetClass={["btn-primary","w-100"]}
          />
          <Button  
            onClick={() => this.handleClick('list')} 
            name='list'
            stylesheetClass={["btn-primary","w-100","mx-1"]}
          />
          <Button  
            onClick={() => this.handleClick('pay')} 
            name='pay'
            stylesheetClass={["btn-primary","w-100"]}
          />
        </div>
        {this.state.activeTab === 'add' ? <Add 
                                              name="add" 
                                              inputForm={(e) => this.handleForm(e.target.value)} 
                                              inputSlider={this.handleSlider}
                                              slider={this.state.inputSlider}
                                              onClick={() => this.handleSubmit()} 
                                          /> : null}
        {this.state.activeTab === 'list' ? <List list={this.state.items} /> : null}
        {this.state.activeTab === 'pay' ? <Pay 
                                              list={this.state.items} 
                                              onUpdate={this.handleUpdate} 
                                              onDelete={this.handleDelete} 
                                          /> : null}
      </div>
    );
  }
}

export default App;