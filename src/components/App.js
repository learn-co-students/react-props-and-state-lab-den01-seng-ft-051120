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

  onChangeType = newType => {
    // handle Filter component change to update app filter state
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  onFindPetsClick = () => {
    const optionalQuery = this.state.filters.type === 'all'
      ? ""
      : `?type=${this.state.filters.type}`
    fetch(`/api/pets${optionalQuery}`)
      .then(response => response.json())
      .then(pets => this.setState({ pets }))
  }

  onAdoptPet = petid => {
    const updatedPets = this.state.pets.map(newPet => {
      if (newPet.id === petid) {
        newPet.isAdopted = true
        return newPet
      } else { return newPet }
    })
    this.setState({ pets: updatedPets })

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
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
