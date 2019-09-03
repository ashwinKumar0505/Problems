import React,{Component} from "react";
import classes from "./StudentMark.module.css";
import DisplayMark from "./DisplayMark";
class StudentMark extends Component{
  state={
    showMark:"quarterly",
  }
  changeType=(event)=>{
     this.setState(
       {
         showMark:event.target.value
       }
     )
  }
  render(){
  let displayMark=null;
  if(this.state.showMark==="quarterly"){
       displayMark=<DisplayMark type={this.props.marks[0].quarterly} />
  }
  else if(this.state.showMark==="halfYearly"){
      displayMark=<DisplayMark type={this.props.marks[1].halfYearly} />
  }
  else{
         displayMark=<DisplayMark type={this.props.marks[2].annual} />
  }
  return(
    <div className={classes.DisplayMark}>
    <div className={classes.tab}>
     <input type="button" value="quarterly" className={classes.button} onClick={this.changeType}></input>
     <input type="button" value="halfYearly" className={classes.button} onClick={this.changeType}></input>
     <input type="button" value="annual" className={classes.button} onClick={this.changeType}></input> 
    </div>
    {displayMark}
    </div>
  );  
  }
}
export default StudentMark;