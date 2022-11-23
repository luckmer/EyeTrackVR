import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IAlgoSettings, IdropDataData, IGeneralSettings } from '../interfaces'

export const DropDataData: IdropDataData[] = [
  {
    name: 'Blob Detection',
    icon: <FontAwesomeIcon icon={faDroplet} />,
    id: 'blob',
  },
]

export const Settings = [{}]

export const GeneralSettings: IGeneralSettings[] = [
  {
    name: 'Flip Left Eye X Axis',
    label: '',
    tooltip: '',
    type: '',
  },
  {
    name: 'Flip Right Eye X Axis',
    label: '',
    tooltip: '',
    type: '',
  },
  {
    name: 'Flip Y Axis',
    label: '',
    tooltip: '',
    type: '',
  },
  {
    name: 'Dual Eye FallOff',
    label: '',
    tooltip: '',
    type: '',
  },
  {
    name: 'Sync Blinks (disables winking)',
    label: '',
    tooltip: '',
    type: '',
  },
]

export const AlgoSettings: IAlgoSettings[][] = [
  [
    {
      name: 'Min Blob Size',
      id: 'min_blob_size',
      min: 0,
      max: 100,
      value: 10,
      step: 1,
      tooltip: 'sets the minimum size of the blob',
    },
    {
      name: 'Max Blob Size',
      id: 'max_blob_size',
      min: 0,
      max: 100,
      value: 10,
      step: 1,
      tooltip: 'sets the maximum size of the blob',
    },
  ],
]

export const FilterParams: IGeneralSettings[] = [
  {
    name: '',
    label: '',
    tooltip: '',
    type: '',
  },
]

export const OSCSettings: IGeneralSettings[] = [
  {
    name: '',
    label: '',
    tooltip: '',
    type: '',
  },
]
