import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  changeType = (selection) =>{
    this.setState({
      filters: {
        ...this.state.filters,
        type: selection
      }
    })
    //this.state.filters.type = selection
  }

  findPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all'){
      url += '?type=' + this.state.filters.type
    }
    console.log('this makes a fetch w', this.state.filters.type)

    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({
        pets: result
      }))
  }

  adoptPet = (id) =>{
    //I've tried this a few different ways, not sure what's best
    let result = this.state.pets.map((pet) => {
      if (pet.id === id){
        pet.isAdopted = true
      }
      return pet
    })
    console.log(result)
    this.setState({
      pets: result
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
    <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
