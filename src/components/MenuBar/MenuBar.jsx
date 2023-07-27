import { Route, Routes } from 'react-router-dom'

import { MdAccountBox  } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsFillRocketFill } from 'react-icons/bs'
import { GiUnstableProjectile } from 'react-icons/gi'
import { FaSun } from 'react-icons/fa'
import { MdOutlineMenuOpen } from 'react-icons/md'
import './MenuBar.scss'
import HomePage from '../pages/HomePage'

const MenuBar = () => {

function handleChangeSetup() {
    return(
        alert('teste')
    )
}

 return (
    <div className='menu-bar-content'>
       
        <div className="list-itens">
            
             <div className="item1">
                <div className='icon-menu'> <MdOutlineMenuOpen size={30}/></div>
            </div>
            <div className="item1">
                <div className='icon-sun'> <FaSun size={30}/></div>
            </div>
            <div className="item1">
                <div className="icon-about"><MdAccountBox size={20}/></div>
                <span className='add'>Sobre</span>
                </div>
            <div className="item1" >
               <div className="icon-conta"><BsTelephoneFill size={20}/></div> 
               <span>Contato</span>
            </div>
            <div className="item1" onclick={handleChangeSetup}>
                <div className="icon-skills"><BsFillRocketFill size={20}/></div>
                <span>Habilidades</span>
            </div>
            <div className="item1">
                <div className='icon-project'> <GiUnstableProjectile size={20}/></div>
                <span>Projetos</span>
            </div>
        </div>
        
    </div>
 )
}

export default MenuBar