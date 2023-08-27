import { useState } from 'react'
import './App.css'
import React from 'react'



class App extends React.Component{
  constructor(props){
    
    super(props);
    this.state={
      input:"",count:0
    }
    this.Save = this.Save.bind(this)
    // this.Delete = this.Delete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt){
    this.setState ({
      input: evt.target.value,
      count:this.state.count+1
    })
    
  }
  
  Save(){
    const div = document.getElementById("lists")
    const outerDiv =document.createElement("div")
    const tasks = document.createElement("span")
    const deleteButton = document.createElement("button")
    div.appendChild(outerDiv)
    outerDiv.setAttribute("class","list")
    outerDiv.setAttribute("id",this.state.count)
    outerDiv.appendChild(tasks)
    outerDiv.appendChild(deleteButton)
    deleteButton.setAttribute("class","btn btn-primary completetask")
    tasks.textContent = this.state.input
    deleteButton.textContent= "Done"
    deleteButton.addEventListener("click",() =>{
      div.removeChild(outerDiv)
    })
    // ReactDOM.render(<Tasks/>,document.getElementById("lists"))
    console.log(this.state.input)
  }
  render(){
    return(
      <div className='outer'>
      
        <div className='actions'>
          <input type='text' onChange = {evt =>this.handleChange(evt)} value = {this.state.input}/>
          <button className = "btn btn-primary addtask" onClick={this.Save} >Add Task</button>
        </div>
        <div className='lists' id="lists">

        </div>
      </div>
    )
  }

}
export default App


