import React from "react";
import classes from "./Search.module.css";

function Search(props){
return(
  <div className={classes.searchField}>
  <div className={classes.user}>
  <input type="text" value={props.userName} className={classes.searchUser} placeholder="Enter your UserName" onChange={props.changeUser}/>
  <input type="button" className={classes.goButton} value="GO" onClick={props.searchUser}/>
  <input type="button" className={classes.clearUser} value="Clear" onClick={props.clearUser}/>
  </div>
  <br></br>
  <div className={classes.repo}>
  <input type="text" className={classes.searchRepo} placeholder="Enter Some Keywords To Filter Eg:algo." onChange={props.filterRepo}/>
  <input type="button" className={classes.clearRepo} value="Clear" />
  </div>
  </div>
) 
}
export default Search;