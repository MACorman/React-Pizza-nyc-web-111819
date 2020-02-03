import React from "react"

const PizzaForm = (props) => {

    return(
        <div className="form-row" >
          <div className="col-5">
              <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={props.pizza.topping} onChange={(e) => props.editInput(e)}/>
          </div>
          <div className="col">
            <select value={props.pizza.size} name="size" className="form-control" onChange={(e) => props.editInput(e)}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" checked={props.pizza.vegetarian} onChange={(e) => props.editVegStatus(e)}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" name="vegetarian" checked={!props.pizza.vegetarian} onChange={(e) => props.editVegStatus(e)}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col" id={props.pizza.id}>
            <button type="submit" className="btn btn-success" onClick={props.submitPizza} >Submit</button>
          </div>
        </div>

    )
}

export default PizzaForm
