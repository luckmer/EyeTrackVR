import { storiesOf } from '@storybook/react'
import { useState } from 'react'
import Modal from './index'

storiesOf('Modals/Modals', module).add('Modal', () => {
  const [visible, setVisible] = useState(false)
  return (
    <Modal onClose={() => setVisible(false)} isVisible={visible} width={200}>
      <div>children</div>
    </Modal>
  )
})
