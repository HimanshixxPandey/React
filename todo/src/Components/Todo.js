import React, { Component } from 'react'

export default class Todo extends Component {
    constructor()
    {
        super();
        this.state={
            tasks:[{id:1,task:"Revise js"},{id:2,task:"Revise DSA"}],
            currTask:"",
            
        };
    }
    handleAddTask=()=>
    {
this.setState({
  tasks:[...this.state.tasks,{id:this.state.tasks.length+1,task:this.state.currTask}]
})
    }
    handleChange=(e)=>
    {
console.log(e.target.value);
this.setState({
  currTask:e.target.value,
})
    }
handleDelete=(id)=>
{
 let arr= this.state.tasks.filter(taskobj=>taskobj.id!=id);
 this.setState({
  tasks:[...arr]
 });
}
  render() {
    return (
      <div>
      <input type="text" placeholder='Enter your Task' onChange={this.handleChange}/>
      <button onClick={this.handleAddTask}>Add</button>
      {this.state.tasks.map((taskobj,idx)=>
            {
          return(
          <li className="list"key={taskobj.id}><p>{`${idx}.${taskobj.task}`}</p>
          <button  className="del" style={{backgroundColor:"red"}} onClick={()=>this.handleDelete(taskobj.id)}>Delete</button>
          </li>
          );
          })}
     </div>
  ); 
}
}
