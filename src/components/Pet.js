import React from 'react'

class Pet extends React.Component {

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const { name, age, gender, type, weight, } = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted === false
            ? <button className="ui primary button" onClick={this.handleClick} >Adopt pet</button>
            : <button className="ui disabled button">Already adopted</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet



// import React from 'react'

// class Pet extends React.Component {
  
//   handleClick = () => {
//     this.props.onAdoptPet(this.props.pet.id)
//   }
  
//   render() {
//     const { name, age, gender, type, weight, } = this.props.pet;
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">
//             {gender === 'female' ? '♀' : '♂' }
//             {name}
//           </a>
//           <div className="meta">
//             <span className="date">{type}</span>
//           </div>
//           <div className="description">
//             <p>Age: {age}</p>
//             <p>Weight: {weight}</p>
//           </div>
//         </div>
//         <div className="extra content">
//           {this.props.pet.isAdopted === false
//           ? <button className="ui primary button"
//           onclick={this.handleClick} >Adopt pet</button>
//           : <button className="ui disabled button">Already adopted</button>
//           }
//         </div>
//       </div>
//     )
//   }
// }

// export default Pet
