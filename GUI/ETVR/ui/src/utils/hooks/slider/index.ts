import { useState } from 'react'

export default function useSlider() {
  const [slideIndex, setSlideIndex] = useState<number>(0)
  const [isRight, setIsRight] = useState<boolean>(true)
  const [sliderLength, setSliderLength] = useState<number>(0)

  const goToIndex = (index) => {
    if (index > slideIndex) {
      setIsRight(true)
    } else {
      setIsRight(false)
    }
    setSlideIndex(index)
  }

  const slideRight = () => {
    let index = slideIndex
    index++
    if (index > sliderLength - 1) {
      index = 0
    }
    setSlideIndex(index)
    setIsRight(true)
  }

  const slideLeft = () => {
    let index = slideIndex
    index--
    if (index < 0) {
      index = sliderLength - 1
    }
    setSlideIndex(index)
    setIsRight(false)
  }

  return {
    setSliderLength,
    goToIndex,
    slideRight,
    slideLeft,
    isRight,
    slideIndex,
    slideArray: Array.from(Array(sliderLength).keys()),
  }
}
