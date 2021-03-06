import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import { Link } from 'react-router-dom';
import 'react-dates/lib/css/_datepicker.css';
import '../styles/form.css';

export default class IncomeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocus:false,
      error: '',
    };
    this.onDescriptionChange=this.onDescriptionChange.bind(this);
    this.onAmountChange=this.onAmountChange.bind(this);
    this.onDateChange=this.onDateChange.bind(this);
  }
  
  onDescriptionChange(e){ 
    const description = e.target.value;
    this.setState(()=>({description}));
  }

  onAmountChange(e){ 
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){  //not more than 2 digits after decimal
      this.setState(()=>({amount}));
    }
  }

  onSubmit= (e) => {  
    e.preventDefault();

    if( !this.state.description || !this.state.amount ){
      this.setState(() => ({error: "Please provide description and amount"})) //set error
    }
    else{
      this.setState(() => ({error: ""}));//clear error
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf()
      });
    }
  }

  onDateChange= (createdAt) =>{
    if(createdAt)
      this.setState(()=>({createdAt}));
  }

  onFocusChange =({focused}) =>{
    this.setState(()=>({calendarFocus: focused}));
  }

  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            className="text-input"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            className="text-input"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          
          <div>
            <button className="button">Save Income</button>
            <Link className="button" to="/dashboard">Back</Link>
          </div>
          
        </form>
    )
  }
}
