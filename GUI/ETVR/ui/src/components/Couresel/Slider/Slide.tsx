import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

export interface Iprops {
  children: JSX.Element
  index: number
  currentIndex: number
  isRight: boolean
}

export default function Slide({ children, index, currentIndex, isRight }: Iprops) {
  return (
    <Transition
      as={Fragment}
      show={currentIndex === index}
      enter="transform duration-[400ms]"
      enterFrom={isRight ? 'translate-x-full' : '-translate-x-full'}
      enterTo="translate-x-0"
      leave="transform duration-[400ms]"
      leaveFrom="translate-x-0"
      leaveTo={isRight ? '-translate-x-full' : 'translate-x-full'}>
      {children}
    </Transition>
  )
}
