import React from 'react'
import PropTypes from 'prop-types'

const PromptItem = ({ text, handleClick }) => {
  return (
    <div>
      <p>Question: {text}</p>
      <button onClick={handleClick}>Ask Question</button>
    </div>
  )
}

PromptItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default PromptItem
