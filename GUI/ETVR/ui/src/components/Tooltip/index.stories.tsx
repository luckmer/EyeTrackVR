import { storiesOf } from '@storybook/react'
import Tooltip from './index'

storiesOf('Tooltips/Tooltips', module).add('Tooltip', () => {
  return (
    <Tooltip>
      <div>Children</div>
    </Tooltip>
  )
})
