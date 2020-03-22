import React, { Component } from 'react'

const TableHeader = () =>{
  return(
    <thead>
      <tr>
          <th scopr='col'>#</th>
          <th scop='col'>Name</th>
          <th scop='col'>Job</th>
      </tr>
    </thead>
  )
}



const TableBody = props => {

  const rows = props.character.map((row, index) => {

    return (
      <tr key={index}>
        <th scope='row'>{index+1}</th>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)} className="btn btn-outline-primary">Delete </button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}





const Table = props =>{

      return(
        <div className='container-fluid'>
          <table className ='table table-hover'>
            <TableHeader/>
            <TableBody character = {props.characterData} removeCharacter={props.removeCharacter}/>
          </table>
        </div>
      )
}


// class Table extends Component{
//     render(){
    
//       const {characterData} = this.props

//         return(
//           <table>
//             <TableHeader/>
//             <TableBody character = {characterData}/>
//           </table>
//         )
//     }
// }



export default Table