import logo from '@static/index'
import { faCamera, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'
import Tooltip from '@components/Tooltip'

export interface Iprops {
  name: string
  onClickShowSettings: () => void
  onClickCloseSettings: () => void
  showSettings: boolean
}

const Header = (props: Iprops) => {
  console.log(logo)
  return (
    <header>
      <div className="flex flex-grow justify-around items-center mt-[1rem]">
        <Link to={'/'} className="flex-none">
          <img
            src={logo.logo}
            alt="eytrackvrlogo"
            className="bg-gray-800 hover:bg-gray-900 rounded-full focus:bg-gray-900 transition duration-200 ease-in focus:shadow-inner w-[90px] mr-[42.13px] shadow-lg"
          />
        </Link>
        <div className="flex h-[55%] content-center items-center mt-[5px]">
          <div className="flex flex-grow justify-center border-none shadow-lg content-center leading-5 font-sans font-medium text-[.75rem] rounded-[15px] h-[100%] w-[100%] bg-[#0e0e0e] text-[#5f5f5f]">
            <div className="flex flex-grow content-center justify-evenly h-[100%] leading-5 font-sans font-medium rounded-[14px] p-[5px] bg-[#0e0e0e]">
              <Tooltip tooltip="Tracker Manager">
                <Link
                  to={'/cameras'}
                  className="ml-[1.25rem] rounded-[8px] pt-[.2rem] pb-[.2rem] pl-[1.25rem] pr-[1.25rem] hover:bg-[#252536]">
                  <FontAwesomeIcon size="xl" icon={faCamera} />
                </Link>
              </Tooltip>
              <Tooltip tooltip="Settings">
                <Link
                  to={'/settings'}
                  className="ml-[1.25rem] mr-[1.25rem] rounded-[8px] pt-[.2rem] pb-[.2rem] pl-[1.25rem] pr-[1.25rem] hover:bg-[#252536]">
                  <FontAwesomeIcon size="xl" icon={faGear} />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
        <DropDown
          name={props.name}
          showSettings={props.showSettings}
          onClose={props.onClickCloseSettings}
          onClickOutside={props.onClickShowSettings}
        />
      </div>
    </header>
  )
}

export default Header
