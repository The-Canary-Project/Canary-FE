import React from 'react'
import PromptItem from './PromptItem'

const PromptList = ({ promptList, handleClick }) => {
  return promptList.map(prompt => (
    <PromptItem prompt={prompt} handleClick={handleClick} />
  ))
}

export default PromptList
