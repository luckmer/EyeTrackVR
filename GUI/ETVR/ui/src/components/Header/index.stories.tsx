import { storiesOf } from '@storybook/react'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './index'

storiesOf('Header/Header', module).add('Header', () => {
  const [showSettings, setShowSettings] = useState(false)
  return (
    <BrowserRouter>
      <Header
        name={'welcome XYZ!'}
        showSettings={showSettings}
        onClickShowSettings={() => setShowSettings(true)}
        onClickCloseSettings={() => setShowSettings(false)}
      />
    </BrowserRouter>
  )
})
