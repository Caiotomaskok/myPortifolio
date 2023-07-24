import { MdAccountBox  } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { } from 'react-icons'
import './MenuBar.scss'

const MenuBar = () => {
 return (
    <div className='menu-bar-content'>
        <div className="list-itens">
            <div className="item1">
                <MdAccountBox size={35}/>
                </div>
            <div className="item1">
                <BsTelephoneFill size={30}/>
            </div>
            <div className="item1">Habilidades</div>
            <div className="item1">Sobre mim</div>
        </div>
    </div>
 )
}

export default MenuBar