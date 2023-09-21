import React from 'react'


function Data(props) {
  let newdata = props.newdata

  return (
    <div>
      

      <h2>Data Table</h2>
      <table>
          <thead>
            <td>
              Sr No. 
            </td>
            <td>
              Username
            </td>
            <td>
              User Email
            </td>
            <td>
             dob
            </td>

            <td>
             gender
            </td>
            <td>
              Number
            </td>
            <td>
            comments
            </td>
            <td>
              Number
            </td>
            <td>
               adress 
            </td>
            <td>
              education
            </td>
            <td>
              year 
            </td>
            <td>
             collage
            </td>
            <td>
              desiganation
            </td>
            <td>
              company
            </td>
            <td>
               course
            </td>
            
          </thead>

          {newdata.map((user,index)=>{
          return(
                
          
            <tr key={index}>
              <td>
                {index + 1}
              </td>
              <td>
              {user.username}
              </td>
            
             
             <td>
             {user.email}
             </td>
         
              <td>
              {user.number}
              </td>

              <td>
              {user.dob}
              </td>
              <td>
              {user.gender}
              </td>
              <td>
              {user.number}
              </td>
              <td>
              {user.comments}
              </td>
              <td>
              {user.number}
              </td>
              <td>
              {user.adress}
              </td>
              <td>
              {user.education}
              </td>
              <td>
              {user.year}
              </td>
              <td>
              {user.collage}
              </td>
              <td>
              {user.desiganation}
              </td>
              <td>
              {user.company}
              </td>
              <td>
              {user.course}
              </td>
            </tr>

            
            )

})}

          </table>
    </div>
  )
}

export default Data;
