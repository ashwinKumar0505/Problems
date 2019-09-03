import React from "react";
import classes from "./StudentProfile.module.css"
function StudentProfile(props){
  return(
     <div className={classes.profile}>
       <h2 className={classes.heading}>Student Profile</h2>
       <table className={classes.studpro}>
         <tbody>
         <tr>
           <td>Name</td>
           <td>{props.name}</td>
         </tr>
         <tr>
           <td>School</td>
           <td>{props.school}</td>
         </tr>
         <tr>
           <td>Date Of Birth</td>
           <td>{props.dob}</td>
         </tr>
         </tbody>
       </table>
     </div>

  )

}
export default StudentProfile;