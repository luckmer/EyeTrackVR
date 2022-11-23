export interface IdropDataData {
  name: string
  icon: JSX.Element
  id: string
}

export interface IGeneralSettings {
  name: string
  label: string
  tooltip: string
  type: string
}

export interface IAlgoSettings {
  name: string
  id: string
  min: number
  max: number
  value: number
  step: number
  tooltip: string
}
