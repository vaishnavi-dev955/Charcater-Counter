import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterItem from '../CharacterItem'
import './index.css'

class CharacterCounter extends Component {
  state = {CharactersList: [], inputText: ''}

  onAddCharacter = event => {
    this.setState({inputText: event.target.value})
  }

  onAddInput = event => {
    event.preventDefault()
    const {inputText} = this.state
    const newInputText = {
      id: uuidv4(),
      inputElement: inputText,
    }
    this.setState(prevState => ({
      CharactersList: [...prevState.CharactersList, newInputText],
      inputText: '',
    }))
  }

  render() {
    const {CharactersList, inputText} = this.state
    console.log(CharactersList)
    return (
      <div className="main-container">
        <div className="sub-container1">
          <h1 className="heading1">Count the Characters like a Boss...</h1>
          {CharactersList.length > 0 ? (
            <ul className="list-items-container">
              {CharactersList.map(eachItem => (
                <CharacterItem characterData={eachItem} key={eachItem.id} />
              ))}
            </ul>
          ) : (
            <div className="No-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="No-input"
              />
            </div>
          )}
        </div>
        <div className="sub-container2">
          <h1 className="heading2">Character Counter</h1>
          <form onSubmit={this.onAddInput}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-style"
              onChange={this.onAddCharacter}
              value={inputText}
            />
            <button type="submit" className="Add-button">
              Add{' '}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
