import React from 'react'
import PromptItem from './PromptItem'

const PromptList = ({ promptList, handleClick }) => {
  return promptList.map(prompt => (
    <li><PromptItem text={prompt.text} handleClick={handleClick} /></li>
  ))
}

export default PromptList
