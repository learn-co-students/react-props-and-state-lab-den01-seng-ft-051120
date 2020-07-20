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

    this.onChangeType = (event) => {
      this.setState({
        filters:{
          type: event.target.value
        }
      })
    }

    this.onFindPetsClick = () => {
      const petFetch = this.state.filters.type === 'all' 
        ? fetch('/api/pets')
        : fetch(`/api/pets?type=${this.state.filters.type}`)

      petFetch
        .then(response => response.json())
        .then(results => this.setState({
          pets: results
        }))
    }

    this.updateAdopted = (pet) => {
      pet.isAdopted = true
      return pet
    }

    this.onAdoptPet = (id) => {
      let foundPet = this.state.pets.map(pet => pet.id === id ? this.updateAdopted(pet) : pet)
      this.setState({
        pets: foundPet
      })
    }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
