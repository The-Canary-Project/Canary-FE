import React from 'react'
import TfCalibrater from '../calibrater/Tfcalibrater'
import Chat from '../chat/Chat'

export default function StudentDashboard() {
  return (
    <div>
      Student Dashboard
      <TfCalibrater />
      <Chat />
    </div>
  )
}
