import { storiesOf } from '@storybook/react'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import DropDown from './index'

storiesOf('Header/Header', module).add('DropDown', () => {
  const [showSettings, setShowSettings] = useState(false)
  return (
    <BrowserRouter>
      <DropDown
        name={'welcome XYZ!'}
        showSettings={showSettings}
        onClose={() => setShowSettings(true)}
        onClickOutside={() => setShowSettings(false)}
      />
    </BrowserRouter>
  )
})
