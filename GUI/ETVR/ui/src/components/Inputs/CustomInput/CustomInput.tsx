export interface Iprops {
  type: string
  id: string
  placeholder: string
  setValue: (value: string) => void
  value: string
  title?: string
}

const CustomInput = (props: Iprops) => {
  return (
    <div>
      <input
        title={props.title ?? ''}
        type={props.type}
        id={props.id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        onChange={(e) => props.setValue((e.target as HTMLInputElement).value)}
        value={props.value}
        required
      />
    </div>
  )
}

export default CustomInput
