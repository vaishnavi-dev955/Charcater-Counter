import './index.css'

const CharacterItem = props => {
  const {characterData} = props
  const {inputElement} = characterData
  const inputLength = inputElement.length
  return (
    <li>
      <p className="paragraph">
        {inputElement}: {inputLength}
      </p>
    </li>
  )
}

export default CharacterItem
