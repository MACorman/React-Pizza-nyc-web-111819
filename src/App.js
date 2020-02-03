import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    pizzaToBeEdited: {
      id: "",
      topping: "",
      size: "", 
      vegetarian: false
    }
  }

  componentDidMount() {
    this.getPizzas()
  }

  getPizzas = () => {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(pizzaData => this.setState({ pizzas: pizzaData }))
  }

  editPizza = (pizzaId) => {
    let selectedPizza = this.state.pizzas.find(pizza => pizza.id === pizzaId)
    this.setState({ 
      pizzaToBeEdited: selectedPizza
    })
  }
  
  editInput = (e) => {
    this.setState({
      ...this.state,
      pizzaToBeEdited:{
        ...this.state.pizzaToBeEdited,
        [e.target.name]: e.target.value
      }
    
    
    })
  }

  editVegStatus = (e) => { 
    if (e.target.value === "Vegetarian") {
      this.setState({
        ...this.state,
        pizzaToBeEdited:{
          ...this.state.pizzaToBeEdited,
          vegetarian: true
        }
      })
    } else if (e.target.value === "Not Vegetarian") {
      this.setState({
        ...this.state,
        pizzaToBeEdited:{
          ...this.state.pizzaToBeEdited,
          vegetarian: false
        }
      })
    }
  }

  submitPizza = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.pizzaToBeEdited.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ ...this.state.pizzaToBeEdited })
    })
    .then(resp => resp.json())
    .then(pizzaData => {
      let pizzaArr = this.state.pizzas.map(pizza => pizza.id === this.state.pizzaToBeEdited.id ? {...pizzaData} : pizza)
      this.setState({ pizzas: [...pizzaArr] }) 
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaToBeEdited} editInput={this.editInput} submitPizza={this.submitPizza} editVegStatus={this.editVegStatus} />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
