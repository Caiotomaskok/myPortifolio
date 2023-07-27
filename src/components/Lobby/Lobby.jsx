import HomePage from "../pages/HomePage"
import Back from "../background/Back"

import profile from './Image/foto-perfil.jpg'
import logo from "./Image/dev-bg-1200x800.jpg"
import linkedinLogo from "./Image/linkedin_black_icon.png"
import whtasappLogo from "./Image/whatsapp_black_icon.png"
import GitIcon from "./Image/github_git_icon.png"
import './Lobby.scss'
import MenuBar from "../MenuBar/MenuBar"

const Lobby = () => {
    return (
        <>
        <Back />
        <div className="container">
            <div className="section">
                <img src={profile} alt=" foto de perfil" className="profile" />
                <img src={logo} alt="background perfil" className="image1" />
                <h1 className="fullName"> Caio Tomaskok </h1>
                <span>Front-End JR</span>
                <ul>
                    <li><a href="https://www.linkedin.com/in/tomaskok/"><img src={linkedinLogo} alt="Logo Linkedin" /></a></li>
                    <li><a href="https://github.com/Caiotomaskok?tab=repositories"><img className="icon-git" src={GitIcon} alt="Icon GitHub" /></a></li>
                    <li><a href="5511993862934"><img src={whtasappLogo} alt="Icon Whatsapp" /></a></li>

                </ul>
            </div>
            <div className="section-information">
                    <HomePage />
                    <MenuBar />
                    <br></br>
            </div>
        </div>
        
        </>
        )
}

export default Lobby 