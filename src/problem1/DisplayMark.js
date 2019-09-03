import React from "react";

function DisplayMark(props){
  const subjects=Object.keys(props.type)  
  const marks=Object.values(props.type)  
  return(
     <div>
       <table>
         <tbody>
           <tr>
             <th>Subject</th>
             <th>Marks</th>
           </tr>
           <tr>
             <td>{subjects[0]}</td>
             <td>{marks[0]}</td>
           </tr>
           <tr>
             <td>{subjects[1]}</td>
             <td>{marks[1]}</td>
           </tr>
           <tr>
             <td>{subjects[2]}</td>
             <td>{marks[2]}</td>
           </tr>
           <tr>
             <td>{subjects[3]}</td>
             <td>{marks[3]}</td>
           </tr>
             <tr>
             <td>{subjects[4]}</td>
             <td>{marks[4]}</td>
           </tr> 
         </tbody>
       </table>
     </div>
   )
}
export default DisplayMark;