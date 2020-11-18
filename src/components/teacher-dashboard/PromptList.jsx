import React from 'react'
import PromptItem from './PromptItem'

const PromptList = ({ promptList, handleClick }) => {
  return promptList.map(prompt => (
    <li><PromptItem prompt={prompt} handleClick={handleClick} /></li>
  ))
}

export default PromptList
