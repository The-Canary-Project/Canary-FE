import React, { useState, useEffect } from 'react'
import { getAllPrompts } from '../../services/PromptsService'
import PromptList from '../teacher-dashboard/PromptList'

export default function TeacherDashboard() {
  const [prompts, setPrompts] = useState([])

  useEffect(async () => {
    const APIPrompts = await getAllPrompts()

    setPrompts(APIPrompts)
  }, [])

  const handleClick = () => {
    console.log('socket io')
  }

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <section>
        <PromptList promptList={prompts} handleClick={handleClick} />
      </section>
    </div>
  )
}
