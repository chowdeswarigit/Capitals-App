import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCaptialId: countryAndCapitalsList[0].id,
  }

  onChangeCapitalName = event => {
    this.setState({activeCaptialId: event.target.value})
  }

  getCapital = () => {
    const {activeCaptialId} = this.state

    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCaptialId,
    )
    return activeCapitalAndCountry.country
  }

  render() {
    const {activeCaptialId} = this.state

    const country = this.getCapital(activeCaptialId)
    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="country-heading">Countries And Capitals</h1>
          <div className="questions-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapitalName}
              value={activeCaptialId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country-heading">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
