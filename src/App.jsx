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
  NTasksRemaining(){
    return(
      <div id="empty" className = "text-center">{this.state.count} Pending Tas</div>
    )
  }
  
  Save(){
    
    const div = document.getElementById("lists")
    if(document.getElementById("empty")) 
    div.removeChild(document.getElementById("empty"))
    const outerDiv =document.createElement("div")
    const tasks = document.createElement("span")
    const deleteButton = document.createElement("button")
    div.appendChild(outerDiv)
    outerDiv.setAttribute("class","list")
    outerDiv.setAttribute("id",this.state.count)
    outerDiv.appendChild(tasks)
    outerDiv.appendChild(deleteButton)
    tasks.setAttribute("class","tasks")
    deleteButton.setAttribute("class","btn btn-primary completetask")
    tasks.textContent = this.state.input
    deleteButton.innerHTML= '<i class="fa-regular fa-circle-check fa-xl"></i>'
    deleteButton.addEventListener("click",() =>{
      div.removeChild(outerDiv)
      if(div.childElementCount == 0){
        div.innerHTML = '<div id="empty" className = "text-center">No Tasks at the moment</div>'
      }
      
    })
    // ReactDOM.render(<Tasks/>,document.getElementById("lists"))
    console.log(this.state.input)
  }
  render(){
    return(
      <div className='outer'>
      <div className='title text-center'><h2 className='font-weight-bold'>Task Manager</h2></div>
        <div className='actions'>
          <input type='text' className='input form-control' onChange = {evt =>this.handleChange(evt)} value = {this.state.input}/>
          <button className = "btn btn-primary addtask" disabled = {this.state.input === ""} onClick={this.Save} ><i className="fa-solid fa-circle-plus fa-xl"></i></button>
        </div>
        <div className='lists' id="lists">
          <div id="empty" className = "text-center">No Tasks at the moment</div>
        </div>
      </div>
    )
  }

}
export default App


