import { storiesOf } from '@storybook/react'
import { useState } from 'react'
import CustomInput from './CustomInput'

storiesOf('Header/Header', module)
  .add('CustomInput', () => {
    const [value, setValue] = useState('')
    return (
      <CustomInput
        type={''}
        id={'1'}
        placeholder={'input'}
        setValue={(data) => setValue(data)}
        value={value}
      />
    )
  })
  .add('with title', () => {
    const [value, setValue] = useState('')
    return (
      <CustomInput
        type={''}
        id={'1'}
        placeholder={'input'}
        setValue={(data) => setValue(data)}
        value={value}
        title={'title!'}
      />
    )
  })
