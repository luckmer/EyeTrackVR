import { storiesOf } from '@storybook/react'
import { useState } from 'react'
import Slider from './index'

storiesOf('Sliders/Sliders', module).add('Slider', () => {
  const [range, setValue] = useState('')

  return (
    <Slider
      min={1}
      max={100}
      id={'range'}
      step={'1'}
      range={range}
      onChange={(value) => setValue(value)}
    />
  )
})
