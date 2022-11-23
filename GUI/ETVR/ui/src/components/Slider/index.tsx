export interface IProps {
  min: number
  max: number
  id: string
  step: string
  range: string
  onChange: (value: string) => void
}

const Slider = (props: IProps) => {
  return (
    <div className="">
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.range}
        className=""
        id={props.id}
        step={props.step}
        onChange={(e) => props.onChange((e.target as HTMLInputElement).value)}
      />
    </div>
  )
}

export default Slider
